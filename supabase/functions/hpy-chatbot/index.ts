import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Hpy, the friendly and professional AI assistant for HpyRide.Com - India's All-in-One Mobility Platform.

## About HpyRide.Com
HpyRide.Com is a global mobility and automobile services platform operating across India and internationally. The platform offers multiple services designed to make transportation easier, more affordable, and eco-friendly.

## Services Offered:

### 1. HpyCabs (Active)
- Cab aggregation services for 2-wheelers, 3-wheelers, and 4-wheelers and above (4W+)
- Book rides instantly with verified drivers

### 2. Ride Sharing & Car Pooling (Active) 
- Share rides with verified users on your route
- Split costs, reduce traffic, and travel comfortably
- Includes in-city pooling and outstation pooling
- Available for 2-wheelers and 4W+ vehicles
- Reduces traffic congestion, fuel consumption, and environmental impact

### 3. Driver Pooling (Coming Soon)
- Professional drivers collaborate for long-distance routes
- Better income for drivers, reliable rides for passengers
- Temporary drivers for city and outstation travel

### 4. Car Rentals (Coming Soon)
- Rent verified cars hourly or daily
- Self-drive or with driver options
- Vehicles from verified owners and local rental partners

### 5. Pre-Owned Cars Marketplace (Coming Soon)
- Buy or sell verified used cars
- Transparent pricing, complete documentation
- Trusted deals through verified sellers

## Contact Information
- Support Email: hpyrideindia@gmail.com
- Grievance Email: hpyride.dcgroup@gmail.com
- WhatsApp Support: +91 88976 11021
- Location: Hyderabad, India

## Key Features
- Verified drivers and vehicles
- Safe rides with SOS and emergency response
- Special safety features for women
- Transparent pricing
- Multiple payment options
- Real-time trip tracking

## User Guidelines
- Users must be at least 18 years old
- Drivers must possess valid licenses and documents
- Safety is the top priority

## Your Role as Hpy
1. Be friendly, helpful, and professional
2. Answer questions about HpyRide services accurately
3. Help users understand how to book rides, use car pooling, etc.
4. Provide contact information when needed
5. If asked about something outside HpyRide, politely guide users back or suggest contacting support
6. Keep responses concise but informative
7. Use emojis occasionally to be friendly 😊
8. If you don't know something specific, direct users to WhatsApp support

Remember: You represent HpyRide, so always be positive about the platform and its mission to make mobility better for everyone!`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
