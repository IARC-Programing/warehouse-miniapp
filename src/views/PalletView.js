import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input, Table } from "@mui/joy";

import Layout from "../components/Layout";
import { api } from "../configs";
import _ from "lodash";

function PalletView() {
  const { control, handleSubmit, reset } = useForm();
  const [palletData, setPalletData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [selectPalletId, setSelectPalletId] = useState("");

  const onKeyPalletId = async (payload) => {
    try {
      setSelectPalletId(payload?.palletId);
      const { data } = await api.get(
        `${process.env.REACT_APP_API_URL}/pallet/number/${payload?.palletId}`
      );

      console.log("data", data);
      setPalletData(data);
      setErrorMessage();
    } catch (error) {
      setErrorMessage("ไม่พบ Pallet ที่ต้องการค้นหา");
    } finally {
      reset({ palletId: "" });
    }
  };

  return (
    <Layout title='เช็คพาเลท'>
      <form onSubmit={handleSubmit(onKeyPalletId)}>
        <div className='flex flex-wrap'>
          <div className='w-full px-2 py-1'>สแกนพาเลทที่ต้องการตรวจสอบ</div>
          <div className='w-full px-2 py-1'>
            <Controller
              control={control}
              name='palletId'
              render={({ field }) => (
                <Input {...field} placeholder='Pallet ID' autoFocus />
              )}
            />
          </div>
        </div>
      </form>
      <div className='flex flex-wrap'>
        <div className='text-2xl my-2  font-semibold rounded-md bg-gray-200 p-2'>
          {selectPalletId}
        </div>
        {errorMessage && <div className='w-full '>{errorMessage}</div>}
      </div>
      {palletData && (
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/6 py-2 px-1'>คลังสินค้า</div>
          <div className='w-full lg:w-5/6 py-2 px-1'>
            {palletData?.warehouse?.name || "ไม่ได้อยู่ในคลัง"} แถว{" "}
            {palletData?.warehouse?.row || ""}
          </div>
          <div className='w-full lg:w-1/6 py-2 px-1'>ความจุที่ใช้</div>
          <div className='w-full lg:w-5/6 py-2 px-1'>
            {palletData?.used_capacity || ""} กก.
          </div>
          <div className='w-full lg:w-1/6 py-2 px-1'>สินค้า</div>
          <div className='w-full lg:w-5/6 py-2 px-1'>
            <Table aria-label='basic table'>
              <thead>
                <tr>
                  <th style={{ width: "40%" }}>สินค้า</th>
                  <th>จำนวน</th>
                  <th>ลูกค้า</th>
                  <th>เลขที่ใบรับฝาก</th>
                </tr>
              </thead>
              <tbody>
                {_.map(palletData?.products, (eachProduct, index) => (
                  <tr key={index}>
                    <td></td>
                    <td>{eachProduct?.inventory}</td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default PalletView;
