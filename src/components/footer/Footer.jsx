import React from "react";
import { Calendar, theme } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import logo from "../../images/vnua_logo.png";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
function Footer(props) {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div className="grid-cols-3 gap-24 flex justify-around bg-[#252641] text-[#fff] py-10" >
      <div style={wrapperStyle} className="col-span-1">
        <Calendar fullscreen={false} className="" />
      </div>
      <div className=" col-span-1 w-[30%]">
        <div className="flex justify-start items-center">
          <div className="h-[90px] h-[90px]">
            <img src={logo} alt="" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className=" text-lg font-bold uppercase border-b-[3px] mb-2 border-[#fff]">
              Học viện nông nghiệp việt nam{" "}
            </h2>
            <h3 className=" text-xs font-bold uppercase">
              VIETNAM NATIONAL UNIVERSITY OF AGRICULTURE
            </h3>
          </div>
        </div>
        <div>
          <p className="block">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.{" "}
          </p>
        </div>
      </div>
      <div className="col-span-1 mt-10">
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <PhoneOutlined />
          </div>
          <div className="col-span-1">
            <p>Liên hệ</p>
          </div>
          <div className="col-span-3">
            <p>+84 1234567890</p>
          </div>
        </div>
        <div className="grid grid-cols-5 my-3">
          <div className="col-span-1">
            <EnvironmentOutlined />{" "}
          </div>
          <div className="col-span-1">
            <p>Địa chỉ</p>
          </div>
          <div className="col-span-3">
            <p>Học viện Nông Nghiệp Việt Nam</p>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <MailOutlined />{" "}
          </div>
          <div className="col-span-1">
            <p>Email</p>
          </div>
          <div className="col-span-3">
            <p>hvnnvn@vnua.edu.vn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
