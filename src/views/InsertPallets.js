import React from "react";
import Layout from "../components/Layout";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@mui/joy";
function InsertPallets() {
  const { control } = useForm();
  return (
    <Layout title='ใส่พาเลทไปยังคลัง'>
      <form>
        <div className='flex flex-wrap'>
          <div className='w-full py-1 p-2'>สแกนคลัง</div>
          <Controller
            control={control}
            name='warehouse'
            render={({ field }) => (
              <Input {...field} placeholder='คลังสินค้า' fullWidth autoFocus />
            )}
          />
        </div>
      </form>
    </Layout>
  );
}

export default InsertPallets;
