const mailBody = {
    getResetPasswordBody: (payload) => {
      const { name, link } = payload;
  
      return `<div>
                  <h1>Hey ${name},</h1><br/>
                  <h3>This is link for reset your password and it will be valid for 30 min</h3>
                  <a href="${link}">Click Here</a>
                  <h3><b>DocPro - Project Document Analyzer</b></h3>
              </div>`;
    },
    getRegisterBody: (payload) => {
      const { name } = payload;
  
      return `<div>
                  <h1>Dear ${name},</h1><br/>
                  <h2>Welcome to DocPro | Project Document Analyzer - Unleash your Web Development Superpowers!</h2>
                  <p>Welcome to DocPro! We are thrilled to have you on board as a registered user of our web development platform. Get ready to dive into a world of coding, creativity, and endless possibilities!</p>
                  <p>Happy coding!</p>
                  <p>Best regards,</p>
                  <h3>DocPro Team</h3>
              </div>`;
    },
  };
  
  module.exports = mailBody;