// Ваш файл GroupProfile.tsx
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./ProfileGroupStyles"; // Адаптувати шлях до правильного файлу
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GroupHead } from "./GroupHeadProfile";
import { GroupBio } from "./GroupBio";
import { User, UserProps } from "./UserProfile";
import { GroupName } from "./GroupNameInput";
import { EditGroupPhoto } from "./EditGroupPhoto";
import { UsersList } from "./UsersList";

export default function EditGroup() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [GroupHeadNameExample, setGroupHeadNameExample] = useState("");
  const [bioTextExample, setBioTextExample] = useState("");
  const [menuVisible, setMenuVisible] = useState(false); // Початково приховане меню
  const [GroupNameExample, setGroupNameExample] = useState("");
  const [GroupImage, setGroupImage] = useState(
    "https://picsum.photos/id/237/536/354"
  );

  const user: UserProps = {
    ImagePath: "https://picsum.photos/id/237/536/354",
    Nickname: "User",
  };

  useEffect(() => {
    // Ваш код для отримання користувачів з бази даних.
    // Поки дані не завантажені, встановлюємо тимчасове значення user
    // Наприклад, якщо дані завантажуються асинхронно з використанням async/await:
    async function fetchData() {
      try {
        // Використовуйте свій код для отримання користувачів тут
        const response = await fetch("DB_URL");
        const data = await response.json();
        setUsers(data); // Оновлюємо users, коли дані завантажені
      } catch (error) {
        console.error("Помилка завантаження даних:", error);
      }
    }

    // Викликаємо функцію для завантаження даних
    fetchData();
  }, []); // Передайте необхідні параметри для запиту до бази даних

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <GroupHead setGroupHeadNameExample={setGroupHeadNameExample} />
        <EditGroupPhoto />
        <GroupName setGroupNameExample={setGroupNameExample} />
        <GroupBio setBioTextExample={setBioTextExample} />
        {users.length > 0 ? (
          <UsersList users={users} />
        ) : (
          <UsersList users={[user]} /> // Відображаємо user, коли users порожній
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
