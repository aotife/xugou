import { ReactNode } from "react";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { Toaster } from "./ui";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // 保留useTranslation是为了避免未使用变量报错，也可以直接删除
  const { t } = useTranslation();

  return (
    <Theme appearance="light">
      <Flex direction="column" className="min-h-[100vh]">
        {/* 顶部导航栏 */}
        <Navbar />

        {/* 主要内容 */}
        <Box className="grow px-2">{children}</Box>

        {/* 页脚已删除 */}
        
        <Toaster />
      </Flex>
    </Theme>
  );
};

export default Layout;
