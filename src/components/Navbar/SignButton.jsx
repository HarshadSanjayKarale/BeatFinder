import React from "react";
import { Button } from "flowbite-react";
import {Link} from "react-router-dom";
const SignButton = () => {
  return (
    <Link to={"/sign-in"}>
      <Button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm text-center me-2 mb-2">
        SIGN IN
      </Button>
    </Link>
  );
};

export default SignButton;
