import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <header className="relative bg-slate-800 text-center bg-cover bg-center bg-no-repeat py-5 md:py-5 lg:py-9 text-balance space-y-4 transition-colors overflow-hidden"
                style={{ backgroundImage: "url(https://imgs.search.brave.com/YYm6mH6BXXwV9ghho2q3ZlihxcesuT3oZrSxZbTlm6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/dmVjdG9yLXByZW1p/dW0vc2VydmljaW8t/ZGVzYXJyb2xsby1z/b2Z0d2FyZS1lbmNh/YmV6YWRvLWdyYWRp/ZW50ZS1kZXNhcnJv/bGxhZG9yLXByb2dy/YW1hY2lvbi1jb25z/dHJ1Y2Npb24tYXBs/aWNhY2lvbmVzLWFw/bGljYWNpb24td2Vi/XzExNjI2MTItNjEy/OS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA)" }}>
                {/* Overlay oscuro */}
                <div className="absolute mb-0 inset-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent"></div>

                <div className="relative z-10 mx-auto max-w-6xl px-5 py-10">
                    <h1 className="text-4xl font-extrabold text-gray-100">
                        Administrador de Productos
                    </h1>
                </div>
            </header>
            <main className="w-11/12 sm:w-10/12 mt-5 rounded-lg mx-auto max-w-4xl p-6 bg-white shadow">
                <Outlet />
            </main>
        </>
    )
}
