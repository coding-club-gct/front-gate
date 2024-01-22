"use client"
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer"
import Blog from "@/components/blog";
import logo from "@/assets/codingclublogo.png"
import { Button, Divider, Container, useMediaQuery } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import Services from "@/components/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import dark from "@/assets/dark.png"
import light from "@/assets/light.png"
import { DarkModeContext } from "@/context/darkmode"


interface AnimatedNumberProps {
  value: number;
  duration: number;
  formatValue: (val: any) => number;
}

export default function Page() {
  const [open, setOpen] = useState(true)
  const isMobile = useMediaQuery("(max-width:640px)")
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [membersCount, setMembersCount] = useState<number | null>(null);
  const { darkMode } = useContext(DarkModeContext)

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/orgs/coding-club-gct`, {
          headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
          }
        }).then(res => res.json());
        setRepoCount(response.public_repos);
      } catch (error) {
        console.error('Error fetching organization repository count:', error);
      }
    };
    async function fetchMemberCount() {
      await fetch("/api/discord/members").then(res => res.json()).then(data => setMembersCount(data.approximate_member_count));
    }

    fetchRepoCount();
    fetchMemberCount()
  }, []);

  return <div>
    <div>
      <div className="flex justify-center md:my-12 mb-12" >
        <Container className="flex flex-col md:flex-row justify-around p-0">
          <div className="flex  justify-center w-full mt-12 md:mt-0 md:w-1/3 md:h-full ">
            <div className="w-3/4 h-full">
              <img src={darkMode ? dark.src : light.src} className="object-contain w-full ">
              </img>
            </div>
          </div>
          <div className="h-full md:w-2/3 md:ml-10 w-full flex flex-col gap-4 p-4">
            <p className="text-6xl">Not a <span className="text-yellow">Rocket</span> Science</p>
            <p className="text-lg md:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, similique!</p>
            <div className="flex justify-center  md:w-3/4  gap-4 my-4">
              <Button variant="contained" >Collab on GitHub </Button>
              <Button variant="outlined"  >Join with Discord</Button>
            </div>
            <Divider></Divider>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, autem.</p>
            <div className="flex gap-4">
              <div className=" flex flex-col p-4 gap-4 bg-mantle">
                <p className="text-xl font-medium text-subtext0 ">Repositories in our GitHub</p>
                {repoCount !== null ? (
                  <p className="text-xl  text-subtext0">
                    {repoCount}+
                  </p>
                ) : (
                  <p className="text-xl  text-subtext0 ">Loading...</p>
                )}
              </div>
              <div className=" flex flex-col gap-4  p-4 bg-mantle">
                <p className="text-xl font-medium text-subtext0 ">Members in our Discord Server</p>
                {membersCount !== null ? (
                  <p className="text-xl  text-subtext0">
                    {membersCount}+
                  </p>
                ) : (
                  <p className="text-xl  text-subtext0">Loading...</p>
                )}
              </div>
            </div>

          </div>
        </Container>

      </div>
      <div className="flex justify-center w-full bg-mantle p-4" >
        <Container className="flex flex-col md:flex-row  gap-8 p-0 ">
          <div className="flex flex-col gap-4 md:w-1/2 ml-4">
            <p className="text-3xl text-subtext0 font-medium text-center  mt-4">VISION</p>
            <p className="mt-8">To build a community that serves as a hub for young programmers to learn, develop and enrich their coding skills and also acts as a platform through which they can exhibit their skills to the technical world as talented programmers..</p>
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 ml-4 mb-4 ">
            <p className="text-3xl font-medium text-center mt-4 text-subtext0">MISSION</p>
            <div className="flex flex-col gap-16 md:gap-8 mt- ">
              <div className="flex ">
                <FontAwesomeIcon icon={faCode} className="m-1 text-mauve"></FontAwesomeIcon>
                <p className="pl-4">To elevate the programming skills of future engineers which will help them learn new tactics to deal with dynamic technologies.</p>
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faCode} className="m-1 text-mauve"></FontAwesomeIcon>
                <p className="pl-4 ">To enrich the competitive programming skills of students by participating in renowned competitions.</p>
              </div>
              <div className="flex ">
                <FontAwesomeIcon icon={faCode} className="m-1 text-mauve"></FontAwesomeIcon>
                <p className="pl-4">To enrich the competitive programming skills of students by participating in renowned competitions.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className="p-0">
        <p className="text-4xl md:my-8 mx-4  my-12 md:pt-8 text-subtext0">Lorem ipsum dolor sit.</p>
        <p className="text-sm text-subtext0 mb-12 mx-4 max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore qui doloribus ea hic sunt enim tenetur autem sequi numquam.
        </p>
        <Blog />
        {!isMobile && <Services />}
      </Container>
    </div>
  </div>
}
