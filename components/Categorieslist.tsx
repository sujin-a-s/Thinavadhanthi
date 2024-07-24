
import Link from "next/link"
import { TCategory } from "@/app/Types"; 
const getCategories = async (): Promise<TCategory[] | null> => {
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
  
      if (res.ok) {
        const categories = await res.json();
        return categories;
      }
    } catch (error) {
      console.log(error);
    }
    return null;
  };

export default async function Categorieslist(){
const categories = await getCategories()
    return (
        <div className="flex flex-wrap gap-x-3">
            {categories && categories.map(
                (category)=><Link className="px-4 py-1 rounded-md cursor-pointer bg-slate-800 text-white" href={`/categories/${category.catName}`} key={category.id}>{category.catName}</Link>
            )}
        </div>
    )
}