// data2.js
export const campaignData = [
  {
    id: 1,
    title: "Insulin support for Samuel (Lagos, Nigeria)",
    imgSrc: "/images/samuelmedication.png",
    description:
      "Urgent insulin support for a Type 1 diabetic in Lagos. We helped Samuel get life-saving insulin.",
    buttonText: "View story",
    date: "2024-06-10",
    location: "Lagos, Nigeria",

    // Optional: keep your current HTML detail text if you want
    detail: `
      <p>Samuel reached out to Haziel Charity Foundation in urgent need of insulin.</p>
      <p>Our team verified his situation and helped him obtain a vial of Humulin, providing immediate relief.</p>
      <p>Below is an anonymised version of his plea and our follow-up support.</p>
    `,

    // NEW: chat history
    chat: [
      {
        from: "beneficiary", // or "charity"
        name: "Samuel",
        time: "2024-06-07 09:14",
        text: `Dear Sir/Ma'am, 

I trust you are doing well today and that my email meets you well. 
I got your phone number from your Charity's website. 

I'm Mr. Samuel Tochukwu Ekechukwu, a type 1 diabetic from Lagos. 
Being type 1 means that my immune system mistakenly attacked and destroyed the beta cells of my pancreas which are responsible for the production of insulin. 
As a result, my pancreas doesn't produce insulin again, therefore, I MUST inject insulin each and every single day of my life to stay alive and healthy. 
I have been a type 1 for 20+ years of my life, I'm 39.
Dear Sir/Ma'am, I desperately and urgently need to inject insulin. My insulin has finished and I'm financially unable to buy another one. 
I haven't injected insulin in three days now and I'm beginning to experience symptoms consistent with DKA; I'm getting increasingly fatigued, having diarrhoea and this almost unquenchable urge to throw up, I have been suppressing it because I know that throwing up would be the begining of the end. 
I have been without a job for close to a year now, been relying on my little savings and my elder sister. 

Please Sir/Ma'am, can you help me get insulin. I so desperately need to inject insulin. 
Having an uncontrolled blood sugar levels for several days is life threatening. 
I'm not asking for physical cash or for money to be transferred to me but a physical vial of insulin Humulin or mixtard.
I know there are pharmacies online that sell insulin and deliver to any location in Nigeria. 
At your instruction I will provide you my residential address for possible delivery. 


`,
      },
      {
        from: "charity",
        name: "Haziel Team",
        time: "2024-06-07 10:02",
        text: `Hi Samuel, thank you for reaching out. So sorry you're going through this.
Please give few details so we can confirm your prescription and arrange insulin.`,
      },
      {
        from: "beneficiary",
        name: "Samuel",
        time: "2024-06-07 10:15",
        text: `Thank you so much. I usually use Humulin / Mixtard, one vial lasts me about 14 days...`,
      },
      {
        from: "charity",
        name: "Haziel Team",
        time: "2024-06-07 12:30",
        text: ` Please confirm when it arrives.`,
      },
      {
        from: "beneficiary",
        name: "Samuel",
        time: "2024-06-07 18:45",
        text: `I lack words to express my gratitude dear Ma'am, God bless you abundantly.
Only God Almighty is capable of doing what you just did Ma'am.`,
      },
    ],

    // NEW: videos section
    videos: [
      {
        url: "/images/samuel-video.mp4",
        caption:
          "Samuel sending a thank-you message after receiving his insulin.",
      },
    ],
  },
];
