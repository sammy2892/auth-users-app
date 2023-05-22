const User = require("./User");
const EmailCode = require("./UserCode");

User.hasOne(EmailCode);
EmailCode.belongsTo(User);
