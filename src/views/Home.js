import React from 'react'
import { Button,Space } from 'antd-mobile'

function Home() {
  return (
    <div>
        <Space>
            <Button>เพิ่ม Pallet ลงในคลัง</Button>
            <Button>ย้าย Pallet</Button>
        </Space>
    </div>
  )
}

export default Home