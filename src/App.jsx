"use client";

import { Lock, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import './style.css'

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";


function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
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
        {/* Christmas Tree Icon */}
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
          className="absolute -right-1 -top-2 h-24 w-24"
          style={{ animationDelay: "0.5s" }}
        >
          <img className=" w-20" src="/image/SenClo.png" />
        </div>

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

          <TabsContent value="password">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username or Phone Number</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="username"
                    placeholder="Enter your username or phone number"
                    required
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
                    className="pl-10"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FFFC00] text-black hover:bg-[#FFFC00]/90"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="otp">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FFFC00] text-black hover:bg-[#FFFC00]/90"
                disabled={isLoading}
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      <div className=" w-full flex justify-center items-center pt-2">
      <img className=" w-80" src="/image/Sent.png" />
      </div>
    </div>
  );
}

export default App;
