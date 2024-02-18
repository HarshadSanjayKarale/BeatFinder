import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill all the fields");
    }
    
    try {
      setLoading(true);
      setErrorMessage(null);

      // Simulating API call
      setTimeout(() => {
        const fakeResponse = { success: true, user: { name: "John Doe" } };
        if (fakeResponse.success) {
          navigate("/");
        } else {
          setErrorMessage("Failed to sign in. Please try again.");
        }
        setLoading(false);
      }, 1000); // Simulating delay
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-3xl">
              Beat's
            </span>
            Finder
          </Link>
          <p className="text-xl mt-5">
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label className="text-2xl" value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
                className="text-xl h-12" // Adjust the height here as needed
              />
            </div>
            <div>
              <Label className="text-2xl" value="Your password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
                className="text-xl h-12" // Adjust the height here as needed
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              className="py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-xl hover:from-indigo-600 hover:to-purple-600 transition duration-300"
            >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
            </Button>
          </form>
          <div className="flex gap-2 text-xl mt-5">
            <span>Don't have an account?</span>
            <Link to="/sign-up" className="text-blue-500 text-xl">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
