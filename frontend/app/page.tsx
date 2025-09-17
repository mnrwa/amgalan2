import AuthGuard from "@/components/auth-guard";

export default function Home() {
  return (
    <AuthGuard>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Добро пожаловать!</h1>
        <p className="text-lg mt-4">Вы успешно авторизовались в системе</p>
        <div className="mt-8 p-6 bg-default-100 rounded-lg">
          <h2 className="text-2xl font-semibold">Основной контент</h2>
          <p className="mt-2">Здесь будет основной контент вашего приложения</p>
        </div>
      </div>
    </AuthGuard>
  );
}