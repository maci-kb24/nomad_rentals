import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from '../../hooks/useAuth'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "../ui/alert";
import { Eye, EyeOff } from "lucide-react";

const registerSchema = z
  .object({
    email: z
      .email({ message: "Please enter a valid email address" })
      .min(1, { message: "Email is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

   const { signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setSuccessMessage("");
      setErrorMessage("");

      if(!signUp) {
        setErrorMessage("Authentication not initialized.");
        return;
      }

      const {error} =  await signUp(data.email, data.password);

      if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
        setErrorMessage(error.message);
      } else {
        setSuccessMessage("Account created successfully! You can now log in.");
        setTimeout(() => {
          setSuccessMessage("");
          reset();
        }, 3000);
      }

      // setSuccessMessage("Account created successfully! You can now log in.");
      // setTimeout(() => {
      //   setSuccessMessage("");
      //   reset();
      // }, 3000);
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Error creating account. Please try again.");
    }
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create an Account</CardTitle>
        <CardDescription>
          Enter your information to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {successMessage && (
          <Alert className="mb-4 bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              ✓ {successMessage}
            </AlertDescription>
          </Alert>
        )}
        {errorMessage && (
          <Alert className="mb-4 bg-red-50 border-red-200">
            <AlertDescription className="text-red-800">
              ✗ {errorMessage}
            </AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input
              id="register-email"
              type="email"
              placeholder="m@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <div className="relative">
              <Input
                className="pr-10"
                id="register-password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 6 characters"
                {...register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type="password"
                placeholder="Re-enter your password"
                {...register("confirmPassword")}
              />

              <Button
                type="submit"
                className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
