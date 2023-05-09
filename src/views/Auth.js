import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input, Button } from "@mui/joy";

import Layout from "../components/Layout";
import { userLogin } from "../functions/user";

function Auth() {
  const { control, handleSubmit } = useForm();

  const handleLogin = (data) => {
    userLogin(data)
      .then(() => {
        alert("ลงชื่อเข้าใช้สำเร็จ");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <Layout title='ลงชื่อเข้าใช้'>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div class='mb-6'>
            <label
              for='email'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Username or Email
            </label>
            <Controller
              control={control}
              name='username'
              render={({ field }) => (
                <Input placeholder='Username' {...field} fullWidth />
              )}
            />
          </div>
          <div class='mb-6'>
            <label
              for='password'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <Controller
              control={control}
              name='password'
              render={({ field }) => (
                <Input
                  placeholder='Password'
                  {...field}
                  fullWidth
                  type='password'
                />
              )}
            />
          </div>

          <Button type='submit'>Login</Button>
        </form>
      </Layout>
    </div>
  );
}

export default Auth;
