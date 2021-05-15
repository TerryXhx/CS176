import { useRouter } from "next/router";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import {
  DescriptionOutlined,
  Description,
  SupervisedUserCircleOutlined,
  SupervisedUserCircle,
  PersonOutline,
  Person,
  LocalMallOutlined,
  LocalMall,
  ThumbsUpDownOutlined,
  ThumbsUpDown
} from "@material-ui/icons";
import { useMemo } from "react";
import styles from "../styles/BottomBar.module.css";

export default function BottomBar() {
  const router = useRouter();
  const channel = useMemo(() => {
    switch (true) {
      case router.pathname.startsWith("/feeds"):
        return "feeds";
      case router.pathname.startsWith("/me"):
        return "me";
      case router.pathname === "":
      default:
        return "";
    }
  }, [router.pathname]);

  return (
    <BottomNavigation
      className={styles.wrapper}
      showLabels={true}
      value={channel}
      onChange={(_, v) => {
        router.push("/" + v);
      }}
    >
      <BottomNavigationAction
        className={styles.label}
        label="资讯"
        value=""
        icon={channel === "" ? <Description /> : <DescriptionOutlined />}
      />
      <BottomNavigationAction
        className={styles.label}
        label="盟友圈"
        value="friendCircle"
        icon={
          channel === "friendCircle" ? (
            <SupervisedUserCircle />
          ) : (
            <SupervisedUserCircleOutlined />
          )
        }
      />
      <BottomNavigationAction
        className={styles.label}
        label="好友"
        value="friends"
        icon={
          channel === "friends" ? (
            <ThumbsUpDown />
          ) : (
            <ThumbsUpDownOutlined />
          )
        }
      />
      <BottomNavigationAction
        className={styles.label}
        label="商城"
        value="mall"
        icon={
          channel === "mall" ? (
            <LocalMall />
          ) : (
            <LocalMallOutlined />
          )
        }
      />
      <BottomNavigationAction
        className={styles.label}
        label="我"
        value="me"
        icon={
          channel === "me" ? (
            <Person />
          ) : (
            <PersonOutline />
          )
        }
      />
    </BottomNavigation>
  );
}
