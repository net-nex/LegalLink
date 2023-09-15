import CategoryCard from "./CategoryCard"

const Categories = () => {
    return (
    <section className=" flex flex-col px-14 sm:px-[40px] sm:pb-[50px]">
        <h1 className="text-3xl font-bold text-center pb-5">Category Type</h1>
        <p className="w-50 text-center mx-auto">Any solicitors or legal business can submit a listing to our website. Our site is free for UK solicitors or legal business.</p>
        <div className="grid sm:grid-cols-3 grid-cols-2 lg:px-[120px] px-[20px] w-full">
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </section>
    )
}

export default Categories
