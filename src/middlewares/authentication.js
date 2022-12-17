const authenticate = () => {
   return (req, res, next) => {
      
      console.log("blah blah");
      next();
   };
};

module.exports = authenticate;
