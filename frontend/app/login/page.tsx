"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button } from "@heroui/react";
import { useAuth } from "@/contexts/auth-context";
import styles from "./style.module.scss";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const credentials = {
      login: formData.get("login") as string,
      password: formData.get("password") as string,
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (credentials.login === "admin" && credentials.password === "admin") {
        login("mock-jwt-token", {
          id: 1,
          email: "admin@example.com",
          role: "admin",
          name: "name",
          lastName: "lastName",
        });
        router.push("/");
      } else {
        throw new Error("Неверные учетные данные");
      }
    } catch (err: any) {
      setError(err.message || "Ошибка авторизации");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    < >
      <div className={styles.container} >
        <h1>
          Вход в систему
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Введите ваши учетные данные
        </p>

        <Form className={styles.form} onSubmit={onSubmit} >
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Input
            isRequired
            name="login"
            label="Логин"
            placeholder="Введите ваш логин"
            type="text"
            variant="bordered"
          />

          <Input
            isRequired
            name="password"
            label="Пароль"
            placeholder="Введите ваш пароль"
            type="password"
            variant="bordered"
          />

          <Button
            type="submit"
            color="primary"
            className="w-full"
            isLoading={isLoading}
            size="lg"
          >
            Войти
          </Button>
        </Form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Тестовые данные: admin / admin
          </p>
        </div>
      </div>
    </>
  );
}
