import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Mail, Lock, Eye, EyeOff } from "lucide-react"

// import withAuthLayout from "../components/hoc/withAuthLayout"
import withAuthLayout from "../hoc/withAuthLayout"

function Login() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

    if (email === "sushmita@gmail.com" && password === "admin123") {

      navigate("/dashboard")

    } else {

      alert("Invalid email or password")

    }
  }

  return (

    <div className="w-full max-w-md mx-auto px-2 sm:px-0">

      <Card className="shadow-lg">

        {/* Header */}

        <CardHeader className="text-center space-y-2 px-6 pt-6">

          <CardTitle className="text-xl sm:text-2xl font-bold">
            Welcome Back
          </CardTitle>

          <CardDescription className="text-xs sm:text-sm text-gray-500">
            Enter your credentials to access the inventory system
          </CardDescription>

        </CardHeader>


        {/* Form */}

        <CardContent className="space-y-5 px-6 pb-6">

          {/* Email */}

          <div className="space-y-1">

            <label className="text-sm font-medium">
              Email
            </label>

            <div className="relative">

              <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

              <Input
                type="email"
                placeholder="sushmita@gmail.com"
                className="pl-9 h-11 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

          </div>


          {/* Password */}

          <div className="space-y-1">

            <label className="text-sm font-medium">
              Password
            </label>

            <div className="relative">

              <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />

              <Input
                type={showPassword ? "text" : "password"}
                placeholder="admin123"
                className="pl-9 pr-10 h-11 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

          </div>


          {/* Sign In Button */}

          <Button
            className="w-full h-11 text-sm sm:text-base bg-blue-600 hover:bg-blue-700"
            onClick={handleLogin}
          >
            Sign in
          </Button>

        </CardContent>

      </Card>

    </div>
  )
}

export default withAuthLayout(Login)