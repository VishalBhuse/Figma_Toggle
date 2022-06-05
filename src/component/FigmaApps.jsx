import React, { useContext } from "react";
import Styles from "./Figma.module.css";
import "./simple.css";
import {
  Button,
  Flex,
  Box,
  HStack,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
} from "@chakra-ui/react";
import { BsBarChartLine } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoMdCopy } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { GiDirectionSign } from "react-icons/gi";
import { AiFillPlusCircle, AiOutlineEllipsis } from "react-icons/ai";
import { Figmacontext } from "../context/Figmacontext";

const FigmaApps = () => {
  const { Toggletheme, islight } = useContext(Figmacontext);
  console.log(Toggletheme, islight);

  const datarr = [
    {
      imgurl: "https://bit.ly/dan-abramov",
      info: "Nrupul dev",
      addr: "Copenhangen,Denmark",
      level: "profesional level 15",
      points: "4723 Points",
      colorScheme:'green',
       defaultValue:80
    },
    {
      imgurl:
        "data:image/jpeg;base64,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",
      info: "Sandhya",
      addr: "Banglore, India",
      level: "profesional level 11",
      points: "2339 Points",
      colorScheme:'blue',
       defaultValue:50
      
    },
    {
      imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlMmEQkFiAyiE57rst98zuUv_1NLsehD-DQ&usqp=CAU",
      info: "Elon Tusk",
      addr: "California,USA",
      level: "profesional level 6",
      points: "1884 Points",
      colorScheme:'red',
       defaultValue:30

    },
  ];

  return (
    <div className={islight ? "dark" : "light"}>
      <HStack spacing={"100px"}>
        <Box
          className={islight ? "dark" : "light"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          width="80px"
          h="full"
        >
          <Flex
            h="100vh"
            alignItems="center"
            mx="3"
            justifyContent="space-between"
          >
            <div className={Styles.icon}>
              <img
                src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg"
                alt=""
              />
              <Button
                colorScheme="gray"
                backgroundColor="transparent"
                _hover={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
                width="60px"
              >
                <BsBarChartLine />
              </Button>
              <Button
                colorScheme="gray"
                backgroundColor="transparent"
                _hover={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
                width="60px"
              >
                <GiDirectionSign />
              </Button>
              <Button
                colorScheme="gray"
                backgroundColor="transparent"
                _hover={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
                width="60px"
              >
                <AiFillGift />
              </Button>
              <Button
                colorScheme="gray"
                backgroundColor="transparent"
                _hover={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
                width="60px"
              >
                <FaComments />
              </Button>
              <Button
                colorScheme="gray"
                backgroundColor="transparent"
                _hover={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
                width="60px"
              >
                <IoMdCopy />
              </Button>
              <Button
                colorScheme="gray"
                backgroundColor="transparent"
                _hover={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "80px",
                  borderRadius: "5px",
                }}
                width="60px"
              >
                <FiSettings />
              </Button>
              <Button
                className={Styles.plus}
                width="60px"
                style={{ marginTop: "80px" }}
              >
                <AiFillPlusCircle />
              </Button>
            </div>
          </Flex>
        </Box>

        <Box>
          <Flex
            mb="50px"
            Flex
            justifyContent={"space-between"}
            alignItems="center"
          >
            <p>DashBoard</p>
            <p style={{ fontSize: "10px" }}>
              {islight ? "Dark Mode" : "Light Mode"}
            </p>
            <Box>
              <Switch size="sm" onChange={Toggletheme} />
            </Box>
          </Flex>

          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            width="300px"
            h="80vh"
            borderRadius={"10px"}
            className={islight ? "dark1" : "light1"}
            textTransform={"capitalize"}
          >
            <Flex
              justifyContent={"space-between"}
              alignItems="center"
              p={"10px"}
            >
              <p style={{ fontSize: "15px" }}>Active Users</p>
              <p style={{ fontSize: "10px" }}> For August 2022</p>
            </Flex>
            {datarr.map((item) => {
              return (
                <>
                  <Flex mt={"20px"} mb={'10px'} flexDirection={"row"}>
                    <Image
                      borderRadius="20px"
                      boxSize="150px"
                      src={item.imgurl}
                      width="40px"
                      height="40px"
                      alt="Dan Abramov"
                      ml={"10px"}
                    />
                    <div className={Styles.info}>
                      <span>{item.info}</span>
                      <br />
                      <span>{item.addr}</span>
                    </div>
                    <AiOutlineEllipsis style={{ marginLeft: "50px" }} />
                  </Flex>

                  <Slider
                    aria-label="slider-ex-2"
                    colorScheme={item.colorScheme}
                    defaultValue={item.defaultValue}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems="center"
                    className={Styles.bootominfo}
                  >
                    <p>{item.level}</p>
                    <p>{item.points}</p>
                  </Flex>
                  <hr />
                </>
              );
            })}
          </Box>
        </Box>
      </HStack>
    </div>
  );
};

export default FigmaApps;
