import styles from '../style';
import Sam from '../assets/images/sam.png';
import back from '../assets/images/back.png';
import { BsPerson } from 'react-icons/bs';

const About = () => {
  return (
    <div className="items-center justify-center md:px-[400px]">
      <div className="justify-center px-6 py-10 text-justify text-[#b5bcbf]  md:w-[800px] md:flex md:gap-8">
        <div className="flex flex-col gap-5 font-light">
          <h1 className="flex gap-2 py-2 text-2xl font-bold">
            <BsPerson
              color="#e8b025"
              className="mt-1"
            />
            About Me
          </h1>
          <p>
            Hello, My name is{' '}
            <span className={`${styles.Span} font-bold`}>
              Aluko Olakunle Samuel
            </span>
            and i enjoy building things that you like seeing on the web. My
            interest for programming has been since i got into the university
            where i read online blog and wrote HTML and CSS codes on paper, well
            i could not afford a computer but was still fun 😂 for me then .
            However, i started the journey of being a software developer 2020
            during the pademic,
          </p>
          <p>
            Throughout my career, I have had the privilege of working
            collaboratively in various settings, including a
            <span className={`${styles.Span}`}>
              residency agency, a start-up, and a student-led design
            </span>
            . These experiences have provided me with valuable insights and
            diverse perspectives.
          </p>
          <p>
            Currently, my main focus lies in the development of accessible and
            inclusive products and digital experiences for a wide range of
            clients. I am passionate about ensuring that everyone, regardless of
            their abilities, can engage with and benefit from the products I
            create.
          </p>
          <p className="hidden">
            Working at the residency agency, start-up, and student-led design
            has equipped me with a versatile skill set and the ability to adapt
            to different challenges. Each environment has contributed to my
            growth as a professional.
          </p>
        </div>

        <div className="flex justify-center w-full md:mt-20">
          <div className="md:absolute md:visible w-60 h-60 opacity-20">
            <img
              src={back}
              alt=""
            />
          </div>

          {/* <div className="absolute md:bottom-[-360px] md:right-[510px] bottom-[-760px] right-[30px] border-4 border-[#e8b025] rounded-xl w-[170px] h-[175px]">
                </div> */}
          <div
            className="relative bottom-0 right-0 z-0 bg-[#c5c2c2] border-2 border-black 
                                rounded-xl md:w-[168px] md:h-[168px] w-50 h-50 invisible md:visible">
            <img
              src={Sam}
              alt=""
              className="w-screen h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
