import React from "react";
import logo from "../../images/vnua_logo.png";
import { Button, Input, message } from "antd";

import { LoginOutlined, SearchOutlined } from "@ant-design/icons";

function Header(props) {
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center ">
        <div className="h-[90px] h-[90px]">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-[#583F3B] text-lg font-bold uppercase border-b-[3px] mb-2 border-[#583F3B]">
            Học viện nông nghiệp việt nam{" "}
          </h2>
          <h3 className="text-[#583F3B] text-xs font-bold uppercase">
            VIETNAM NATIONAL UNIVERSITY OF AGRICULTURE
          </h3>
        </div>
      </div>

      <div className="">
        <Search
          placeholder="Tìm kiếm khóa học  "
          onSearch={onSearch}
          style={{
            width: 200,
          }}
          className="mr-4"
        />
        <Button
          type="primary"
          icon={<LoginOutlined />}
          className="bg-[#007A48]"
          onClick={() => {
            message.info("clicked");
          }}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
}

export default Header;
