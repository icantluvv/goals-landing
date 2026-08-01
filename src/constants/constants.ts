import tg from "@/public/footer/telegram.svg"
import vk from "@/public/footer/vk.svg"

export const navLinks = [
    { id: "/", label: "Главная" },
    { id: "/#points", label: "Цель" },
    { id: "/#Tariffs", label: "Тарифы" },
    { id: "/#Faq", label: "FAQ" },
    { id: "/blog", label: "Блог" }
]

export const links = [
    { title: "Главная", href: "/" },
    { title: "Блог", href: "/blog" }
]

export const rightLinks = [
    { title: "Политика сервиса", href: "/privacy" },
    { title: "Лицензионное соглашение", href: "/license" }
]

export const socialLinks = [
    { icon: tg, alt: "tg", url: "https://t.me/dogoals" },
    { icon: vk, alt: "vk", url: "https://vk.com/dogoals" }
]
