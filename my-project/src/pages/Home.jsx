import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // استيراد المكون

const Home = () => {
  return (
    <div>
      <Header /> {/* إضافة المكون Header هنا */}
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold">مرحبًا بك في منصة الوصفات!</h2>
        <p className="mt-4">استمتع باستكشاف وصفات رائعة أو قم بإضافة وصفات جديدة.</p>

        {/* روابط تسجيل الدخول والتسجيل */}
        <div className="mt-6 space-x-4">
          <Link
            to="/login"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            تسجيل الدخول
          </Link>
          <Link
            to="/register"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            إنشاء حساب
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
