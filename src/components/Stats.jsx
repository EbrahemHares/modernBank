import React from 'react'
import styles from '../style';
import {stats} from '../constants';
const Stats = () =>  (
  <section className={`${styles.flexCenter} 
    flex-row flex-wrap sm:mb-20 mb-6`}>
    {
      stats.map((stat,index) => (
        <div key="stat.id" className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold
          xs:text-[40px] text-[30px] xs:leading-[53px]
          leading-[43px] text-white">{stat.value}</h4>
          <p className='text-gradient font-poppins font-normal
          xs:text-[20px] text-[15px] xs:leading-[26px]
          leading-[21px] uppercase ml-3'>{stat.title}</p>
          {index === stats.length -1 ? <div className="hidden" /> :
          <div className="w-[1px] h-5 hidden ss:flex ml-14 justify-center items-center bg-white" />}
        </div>
      ))
    } 
</section>
)


export default Stats 