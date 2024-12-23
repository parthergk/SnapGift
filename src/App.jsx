"use client";

import { Lock, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import "./style.css";

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    // setError("");

    // if (!number.trim()) {
    //   setError("Username or phone number is required.");
    //   return;
    // }
    // if (!password.trim()) {
    //   setError("Password is required.");
    //   return;
    // }

    console.log("Phone/Username:", number);
    console.log("Password:", password);

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    alert("Password Verified!");
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (isOTP && (!otp.trim() || otp.length !== 6)) {
      setError("Please enter a 6-digit OTP.");
      return;
    }

    if (!isOTP) {
      console.log("Sending OTP to:", number);
      setIsLoading(true);
      setIsOTP(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      alert("OTP Sent!");
    } else {
      console.log("Verifying OTP:", otp);
      setIsLoading(true);
      // Simulate OTP verification
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      alert("OTP Verified!");
      resetForm();
    }
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    // setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // setError("");
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setError("");
  };

  const resetForm = () => {
    setIsOTP(false);
    setOtp("");
    setNumber("");
  };

  return (
    <div className="min-h-screen bg-customGray px-4 py-8 md:px-6">
      {/* Snowfall Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="snow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-sm space-y-6 mt-4">
        {/* Header */}
        <div className="relative flex justify-center">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900">
            🎅 Christmas Gifts!
          </h1>
        </div>

        {/* Decorative Christmas Elements */}
        <div className="absolute -left-4 top-0 h-24 w-24">
          <div
            className="h-8 w-8 rounded-full bg-red-500"
            style={{ boxShadow: "0 0 10px #ef4444" }}
          />
        </div>
        <div
          className="absolute -right-0 -top-6 h-24 w-24"
          style={{ animationDelay: "0.5s" }}
        >
          <img className=" w-40" src="/image/SenClo.png" />
        </div>

        {/* Description */}
        <div className="space-y-2 text-center">
          <p className="text-gray-500">
            Verify Your Account to Unlock Christmas Gifts!
          </p>
        </div>

        <Tabs defaultValue="password" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="otp">Verify with OTP</TabsTrigger>
          </TabsList>

          {/* Password Form */}
          <TabsContent value="password">
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username or Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="username"
                    placeholder="Enter your username or phone number"
                    required
                    value={number}
                    onChange={handleNumberChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="pl-10"
                  />
                </div>
              </div>
              {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
              <Button
                type="submit"
                className="w-full bg-[#FFFC00] text-black hover:bg-[#FFFC00]/90"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
            </form>
          </TabsContent>

          {/* OTP Form */}
          <TabsContent value="otp">
            <form onSubmit={handleOTPSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    value={number}
                    onChange={handleNumberChange}
                    className="pl-10"
                    disabled={isOTP}
                  />
                </div>
              </div>
              {isOTP && (
                <div className="space-y-2">
                  <Label htmlFor="otp">OTP</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter the OTP"
                      maxLength={6}
                      required
                      value={otp}
                      onChange={handleOtpChange}
                      className="pl-10"
                    />
                  </div>
                </div>
              )}
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-[#FFFC00] text-black hover:bg-[#FFFC00]/90"
                disabled={isLoading}
              >
                {isLoading
                  ? isOTP
                    ? "Verifying OTP..."
                    : "Sending OTP..."
                  : isOTP
                  ? "Verify OTP"
                  : "Send OTP"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      <div className="w-full flex justify-center items-center pt-2">
        <img className="w-80" src="/image/Sent.png" />
      </div>
    </div>
  );
}

export default App;
