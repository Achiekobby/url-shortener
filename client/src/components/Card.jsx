import { BiLinkExternal } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
export default function Card() {
  return (
    <div className="bg-purple-800 rounded-lg xs:w-[150px] md:w-[200px] p-6">
        <p className="text-white text-xs font-semibold mb-1">https://duvaideals.com</p>
        <div className="flex gap-2 mb-3">
            <p className="text-orange-500 text-xs italic font-semibold">https://minmax.sh/ </p>
            <button ><BiLinkExternal className="text-blue-600" /></button>
        </div>
        <div className="flex gap-2 justify-between align-middle">
            <p className="text-gray-300 text-xs italic" >6 seconds ago</p>
            <div className="flex gap-2">
                <button><FaEdit className="text-blue-500"/></button>
                <button><IoTrashOutline className="text-red-500"/></button>
            </div>
        </div>
        
    </div>
  )
}
