import CategoryCard from "./CategoryCard"
import estateIcon from './estateIcon.png'

const Categories = () => {

    const Categories = ["Estate Planning Lawyer", "Bankruptcy Lawyer", "Employment Lawyer", "Corporate Lawyer", "Immigration Lawyer", "Criminal Lawyer", "Tax Lawyer", "Family Lawyer", "Contact Lawyer", ]

    return (
    <>
        <section className=" flex flex-col px-14 sm:px-[40px] sm:pb-[50px] pt-[50px]">
        <h1 className="text-3xl font-bold text-center pb-5">Category Type</h1>
        <p className="w-50 text-center mx-auto mb-8">Any solicitors or legal business can submit a listing to our website. Our site is free for UK solicitors or legal business.</p>
        <div className="grid sm:grid-cols-3 grid-cols-2 px-[20px] w-full">
            {
                Categories.map((category)=><CategoryCard category={category}/>)
            }
        </div>
        </section>
    </>
    
    )
}

export default Categories
