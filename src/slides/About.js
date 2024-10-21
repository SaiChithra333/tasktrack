import React from "react";
import Avatar from '@mui/material/Avatar';
import NavBar from "../reusables/NavBar";
import Footer from "../reusables/Footer";

function About() {
  return (
    <div>
        <NavBar/>
    <div className="aboutcontainer mb-32 pb-8 lg:pb-24 h-fit font-PTSans text-sm md:text-base lg:text-xl xl:text-2xl bg-blue-50 flex flex-col items-center justify-center">
      <div className="aboutheading text-center my-4">
        <h1>About Us</h1>
      </div>
      <div className="inforows relative flex flex-col gap-5 justify-center items-start">
        <div className="flex justify-start ">
          <div className="flex flex-col gap-2">
            <span className="avatar"><Avatar>1</Avatar></span>
            <div className="rowheading leading-7">
              Ignite Your Curiosity
            </div>
            <div className="rowtext">
              At QuizWhiz, we're on a mission to ignite curiosity and transform learning into an exhilarating adventure. We believe that education should be engaging and accessible, empowering individuals of all ages to explore the world around them through interactive quizzes.
            </div>
          </div>
        </div>
        <div className=" flex justify-start lg:justify-end">
          <div className="flex flex-col gap-2">
            <span className="avatar"><Avatar>2</Avatar></span>
            <div className="rowheading leading-7">
              Quiz Your Way to Knowledge
            </div>
            <div className="rowtext">
              Dive into a world where learning meets fun! Our platform offers a wide variety of quizzes, spanning subjects from math and science to history and pop culture. With each quiz, you’ll embark on a thrilling journey, expanding your knowledge while enjoying every moment of the challenge.
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="flex flex-col gap-2">
            <span className="avatar"><Avatar>3</Avatar></span>
            <div className="rowheading leading-7">
              Connect and Conquer
            </div>
            <div className="rowtext">
              Join a vibrant community of learners at QuizWhiz! We value collaboration and interaction, allowing users to challenge friends, share victories, and spark engaging conversations. Together, we can create a supportive environment where knowledge thrives and friendships flourish.
            </div>
          </div>
        </div>
        <div className="flex justify-start lg:justify-end">
          <div className="flex flex-col gap-2">
            <span className="avatar"><Avatar>4</Avatar></span>
            <div className="rowheading leading-7">
              Start Your Adventure Today
            </div>
            <div className="rowtext">
              Are you ready to embark on an exciting learning journey? Sign up now to explore quizzes, track your progress, and uncover new interests. Join the QuizWhiz community and let’s make learning an unforgettable experience together!
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;
