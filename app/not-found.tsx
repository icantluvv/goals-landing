const NotFound = () => {
    return (
        <main className="h-svh bg-gradient-custom flex flex-col items-center relative overflow-hidden">
            <div className="flex items-center justify-center flex-1 ">
                <AnimatedCircles />

                <h1 className="text-white text-h1/h1 font-bold flex w-full justify-center items-center text-center z-1000">
                    Ошибка 404: Страница не найдена
                </h1>
            </div>
        </main>
    )
}

export default NotFound

const AnimatedCircles = () => {
    return (
        <>
            <div
                className="w-[700px] h-[700px] md:w-[1200px] md:h-[1200px]
      xl:w-[2000px] xl:h-[2000px] rounded-[50%] left-[-70vw] top-[-75vh] absolute bg-[#4A69A3]/76 blur-[100px] move-slow"
            ></div>
            <div
                className="w-[500px] h-[500px] md:w-[1000px] md:h-[1000px]
      xl:w-[1560px] xl:h-[1560px] rounded-[50%] lg:left-[30vw] lg:top-[-100vh] absolute bg-[#627DB1]/46 blur-[100px] lg:move-medium"
            ></div>
            <div
                className="w-[500px] h-[500px] md:w-[750px] md:h-[750px]
      xl:w-[1283px] xl:h-[1283px] rounded-[50%] left-[calc(70%-641px)] top-[-50vh] absolute bg-[#8EA8DB]/40 blur-[100px] move-fast"
            ></div>
        </>
    )
}
