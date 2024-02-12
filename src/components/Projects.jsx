import React from "react";
import Banana from "../assets/projects/banana.png";
import Emoji from "../assets/projects/Emoji.png";
import Songs from "../assets/projects/Songs.png";
import Palindrome_Birthday from "../assets/projects/Palindrome_Birthday.png";
import Stock from "../assets/projects/Stock.png";
import Cash_Register from "../assets/projects/Cash_Register.png";
import Howwelldoyouknow from "../assets/projects/Howwelldoyouknow.png";
import LearnTriangle from "../assets/projects/LearnTriangle.png";
import SocialMedia from "../assets/projects/SocialMedia.png";
import PhineasFerb from "../assets/projects/PhineasFerb.png";
import birthdayLucky from "../assets/projects/birthdayLucky.png";
import boldtype from "../assets/projects/Boldtype.png";
// import { Navbar } from "../components/Navbar";

const ProjectData = () => {
  return (
    <div className="pt-32 pb-32">
      {/* <nav className="navigation"><Navbar /></nav> */}
      <h2 className="text-3xl text-zinc-100 font-bold text-center underline decoration-indigo-600 pb-16">
        Here are my Projects
      </h2>
      <section className="w-full h-full text-center grid sm:grid-cols-4 md:grid-cols-3 gap-10 pl-10 pr-10">
        <div className="text-sm text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={Howwelldoyouknow} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">
            1. How well do you know me?
          </h1>
          <p className="pb-4">
            A CLI App built using nodeJS to check how well do you know me.
          </p>
          <button
            type="button"
            // className="bg-indigo-600 rounded border-1 p-2 text-white mr-12"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://replit.com/@manishagajula/How-well-do-you-know-me/?embed=1&output=1"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            // className="bg-indigo-600 rounded border-1 p-2 text-white"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/How-well-do-you-know-me-quiz"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="textsm text-zinc-100 pb-10 text-sm text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={boldtype} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">
            2. Are you a "The Bold Type" fan?{" "}
          </h1>
          <p className="pb-4">
            This is a CLI Quiz App which checks how well do you know about the
            most famous show "The Bold Type".
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://replit.com/@manishagajula/The-Bold-Type-Quiz/?embed=1&output=1"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/The-Bold-Type-Quiz"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="textsm text-zinc-100 pb-10 text-sm text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={Banana} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">
            3. Minion Translation App{" "}
          </h1>
          <p className="pb-4">
            A fun translation app built using Vanilla JS which converts the user
            entered English text into banana language which is spoken by
            minions.
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://minionlanguageapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/banana-speak-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={PhineasFerb} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">
            4. Phineas and Ferb Translation App{" "}
          </h1>
          <p className="pb-4">
            A fun translation app built using Vanilla JS which converts the user
            entered English text into Phineas and Ferb language.
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://phineasandferb-translator.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/Phineas-and-Ferb-Translator"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="textsm text-zinc-100 pb-10 text-sm text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={Emoji} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">5. Emoji Interpreter App </h1>
          <p className="pb-4">
            Emoji Interpreter app built using ReactJS wherein user can check the
            meaning of various emojis that are present in the database.
          </p>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://o0qk58.codesandbox.io"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/Emoji-Interpreter"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="textsm text-zinc-100 pb-10 text-sm text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={Songs} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">
            6. Songs Recommendation App{" "}
          </h1>
          <p className="pb-4">
            A Song recommendation app built using ReactJS wherein user can see
            all the best songs from different genre like bollywood, hollywood,
            tollywood, kpop etc.
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a href="https://d4d1iv.csb.app/" target="_blank" rel="noreferrer">
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/songs-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={Cash_Register} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">7. Cash Register App </h1>
          <p className="pb-4">
            Built a cash register app using vanilla JS wherein user can enter
            the billed amount and cash given by the customer and then the app
            will show the minimum no. of notes by which the user can return the
            change.
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://cashregisterappnew.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/Cash-Register-App"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={birthdayLucky} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">8. Lucky Birthday App </h1>
          <p className="pb-4">
            Built a fun app using vanillaJS which takes the users birthday and
            their lucky number and tells whether your birthday is lucky or not.
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://luckybirthdayappnew.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/Lucky-Birthday-App"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={LearnTriangle} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">9. Learn triangles </h1>
          <p className="pb-4">
            Built a fun triangles app wherein user can check their knowledge on
            triangles in the form of quiz and use it as a calculator to find
            area & hypotenuse of triangles.
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://learntrianglesapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/Learn-Triangles"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={Palindrome_Birthday} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">10. Palindrome Birthday </h1>
          <p className="pb-4">
            Built a fun palindrome birthday app which takes the user's DOB and
            checks whether it is palindrome or not.
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://palindrombirthdayapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700s"
          >
            <a
              href="https://github.com/manishagajula/Palindrome-birthday"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>

        <div className="text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={Stock} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">
            11. Stock Profit/Loss Calculator{" "}
          </h1>
          <p className="pb-4">
            Built a stock profit/loss calculator app wherein user can check
            their stock returns both in terms of percent and absolute value.
          </p>
          {/* <div className="pr-2"> */}
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://stockprofitandlosscal.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>
          {/* </div> */}
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700"
          >
            <a
              href="https://github.com/manishagajula/Stock-Pofit-or-Loss-calculator"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>
        <div className="text-sm text-zinc-100 pb-10 shadow-lg shadow-[#040c16] group container rounded-md h-100 w-96 mx-auto border p-10 shadow-[#b3d0ed] hover:scale-110 duration-500 border-black">
          <h3 className="pb-2">
            <img src={SocialMedia} alt={"projectImg"} />
          </h3>
          <h1 className="text-2xl font-bold pb-4">12. Social Media App</h1>
          <p className="pb-4">
            A social media website where you can connect with your friends!
          </p>
          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 mr-12"
          >
            <a
              href="https://replit.com/@manishagajula/How-well-do-you-know-me/?embed=1&output=1"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </button>

          <button
            type="button"
            className="bg-indigo-600 border-2 px-6 py-3 my-2 border-indigo-600 rounded-md hover:bg-indigo-700 "
          >
            <a
              href="https://github.com/manishagajula/How-well-do-you-know-me-quiz"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-heading">Connect with me</div>
        <div className="sociallinks">
          <div className="linkedinicon">
            <a
              href="https://www.linkedin.com/in/manishagajula/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in fa-2x footer-icon"></i>
            </a>
          </div>

          <div className="twittericon">
            <a
              href="https://twitter.com/ManishaG15"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter fa-2x footer-icon"></i>
            </a>
          </div>

          <div className="githubicon">
            <a
              href="https://github.com/manishagajula"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github fa-2x footer-icon"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectData;
