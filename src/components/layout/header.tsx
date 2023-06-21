import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Mail, Phone } from 'tabler-icons-react';
import { getInfomation } from '../../../services';


function Header() {

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["infomation"],
    queryFn: getInfomation,
  });
  console.log(data)
  console.log(process.env.NEXT_PUBLIC_URL + data?.data?.attributes?.Logo.data.attributes.url)
  if (data) {
    return (
      <div>
        <div className="hidden header-top md:flex justify-between items-center py-2 bg-green-600 px-4">
          <div className='flex text-sm gap-4'>
            <h1 className='flex items-center gap-1'><Phone
              size={24}
              strokeWidth={2}
              color={'white'}
            /> <Link className='no-underline text-xs text-white' href={data?.data?.attributes?.PhoneHref}>{data?.data?.attributes?.Phone}</Link></h1>
            <h1 className='text-xs text-white flex items-center gap-1'><Mail
              size={24}
              strokeWidth={2}
              color={'white'}
            />{data?.data?.attributes?.Email}</h1>
          </div>

          <div className='flex text-white text-xs gap-4'>
            <Link className='text-white no-underline font-semibold' href={"/tin-tuc"}>Tin tức</Link>
            <Link className='text-white no-underline font-semibold' href={"/tuyen-dung"}>Tuyển dụng</Link>
            <Link className='text-white no-underline font-semibold' href={"/van-ban-phap-ly"}>Văn bản pháp lý</Link>
            <Link className='text-white no-underline font-semibold' href={"/van-ban-phap-ly"}>Liên hệ</Link>
          </div>
        </div>

        <div style={{ background: "url(/background.jpg)", backgroundPosition: "center", backgroundSize: "cover" }} className='h-[200px] w-full'>
          <Image src={process.env.NEXT_PUBLIC_URL + data?.data?.attributes?.Logo.data.attributes.url} width={60} height={50} alt="logo-istdh" />
        </div>
      </div>
    )
  }
  else {
    return
  }

}

export default Header