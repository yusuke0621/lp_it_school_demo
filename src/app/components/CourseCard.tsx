// components/CourseCard.tsx

import Image, { StaticImageData } from 'next/image';

type CourseCardProps = {
  title: string;
  icon: StaticImageData;
  description: string;
  skills: string[];
};

export const CourseCard = ({
  title,
  icon,
  description,
  skills,
}: CourseCardProps) => {
  return (
    <div className='w-full md:w-[280px] bg-white rounded-xl shadow-md px-4 py-4 text-center md:h-[380px]'>
      <h3 className='font-semibold mb-2'>{title}</h3>

      <div className='flex justify-center mb-4'>
        <div className='w-[180px] h-[60px] p-2 rounded-md'>
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className='object-contain w-full h-full'
          />
        </div>
      </div>

      <div className='flex text-start'>
        <p className='text-xs mb-6'>{description}</p>
      </div>

      <div className='relative bg-[#eaf4fd] rounded-xl px-4 py-3 text-center'>
        <p className='absolute top-[-10px] inset-x-0 leading-[18px] inline-block font-text-sp-p text-transparent !bg-clip-text [background:linear-gradient(-88.62deg,_#187fc3,_#08adff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-bold mb-2'>
          学べること
        </p>
        <div className='flex flex-wrap justify-start gap-2 text-[10px] mt-2'>
          {skills.map((item) => (
            <span
              key={item}
              className='border border-[#187fc3] bg-white text-[#187fc3] px-2 py-[2px] rounded-full'
            >
              {item}
            </span>
          ))}
          <b className='text-[#187fc3] px-2 py-[2px] rounded-full'>など</b>
        </div>
      </div>
    </div>
  );
};
