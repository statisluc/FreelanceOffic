// export async function handler(event) {

//   try {
//     const { name, email, message } = JSON.parse(event.body);

//     const response = await fetch(
//       "https://api.emailjs.com/api/v1.0/email/send",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           service_id: process.env.EMAILJS_SERVICE_ID,
//           template_id: process.env.EMAILJS_TEMPLATE_ID,
//           user_id: process.env.EMAILJS_PUBLIC_KEY,
//           accessToken: process.env.EMAILJS_PRIVATE_KEY,
//           template_params: {
//             name: name,

//             email: email,
//             reply_to: email,
//             message: message,
//           },
//         }),
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`Emailjs failed ${response.status}`);
//     }
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ success: true }),
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ success: false, error: err.message }),
//     };
//   }
// }
export async function handler(event) {
  try {
    console.log("Event Body:", event.body);
    console.log("Env Vars:", {
      service: process.env.EMAILJS_SERVICE_ID,
      template: process.env.EMAILJS_TEMPLATE_ID,
      public: process.env.EMAILJS_PUBLIC_KEY,
      private: process.env.EMAILJS_PRIVATE_KEY,
    });

    const { name, email, message } = JSON.parse(event.body);

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          accessToken: process.env.EMAILJS_PRIVATE_KEY,
          template_params: {
            name,
            email,
            reply_to: email,
            message,
          },
        }),
      }
    );

    const text = await response.text();
    console.log("EmailJS Response:", response.status, text);

    if (!response.ok) throw new Error(text);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Serverless Function Error:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
}
