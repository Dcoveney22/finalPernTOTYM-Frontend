export const sendEmailMessage = async (formMessage) => {
  console.log(formMessage);

  try {
    const response = await fetch("http://localhost:5000/contactUs/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formMessage }),
    });
    if (response.ok) {
      return response;
      //   console.log("Email was sent succesfully from frontend");
    } else {
      console.log("There was an error sending the mail from teh frontend");
    }
  } catch (error) {
    console.log("Error during the fetch", error);
  }
};
