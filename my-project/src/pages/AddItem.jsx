import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function AddItem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // سنخزن الملف نفسه هنا
  const [imagePreview, setImagePreview] = useState(null); // لتخزين صورة المعاينة
  const navigate = useNavigate();

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!title || !description || !image) return;

    const newItem = { id: Date.now(), title, description, image };

    // استرجاع العناصر المخزنة مسبقًا
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];

    // إضافة العنصر الجديد إلى العناصر المخزنة
    storedItems.push(newItem);

    // تخزين العناصر في localStorage
    localStorage.setItem("items", JSON.stringify(storedItems));

    // إعادة تعيين الحقول
    setTitle("");
    setDescription("");
    setImage(null);
    setImagePreview(null); // مسح المعاينة

    // الانتقال إلى صفحة عرض العناصر
    navigate("/items");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // الحصول على الملف المرفوع
    if (file) {
      const previewUrl = URL.createObjectURL(file); // إنشاء رابط مؤقت للصورة
      setImage(file); // تخزين الملف نفسه
      setImagePreview(previewUrl); // تخزين رابط المعاينة
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6">إضافة عنصر جديد</h2>
        <form onSubmit={handleAddItem} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="العنوان"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="الوصف"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input
            type="file"
            accept="image/*" // لتحديد نوع الملفات المسموح بها
            onChange={handleImageChange} // عندما يختار المستخدم صورة
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            إضافة العنصر
          </button>
        </form>
      </div>
    </div>
  );
}

