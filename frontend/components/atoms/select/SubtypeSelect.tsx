import React from 'react';

export default function SubtypeSelect() {
  return (
    <div className="h-fit">
      <label htmlFor="subtype" className="text-sm text-gray-300">
        Tộc/hệ phụ:
      </label>
      <select id="subtype" className="block w-60 h-10 px-2 text-sm  border  rounded-lg bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500 focus:border-blue-500">
        <option selected>Chọn tộc/hệ phụ</option>
        <option value="BÒ SÁT">Bò sát</option>
        <option value="ĐIỂU">Điểu</option>
        <option value="DARKIN">Darkin</option>
        <option value="RỒNG">Rồng</option>
        <option value="PORO">Poro</option>
        <option value="QUÁI VẬT BIỂN">Quái vật biển</option>
        <option value="THƯỢNG GIỚI">Thượng giới</option>
        <option value="KHO BÁU">Kho báu</option>
        <option value="CÔNG NGHỆ">Công nghệ</option>
        <option value="ELNUK">Elnuk</option>
        <option value="CỔ NGỮ THẾ GIỚI">Cổ ngữ thế giới</option>
        <option value="TINH LINH">Tinh Linh</option>
        <option value="YORDLE">Yordle</option>
        <option value="NHỆN">Nhện</option>
        <option value="CHÓ">Chó</option>
        <option value="MÈO">Mèo</option>
        <option value="THỂ THĂNG HOA">Thể thăng hoa</option>
        <option value="VŨ KHÍ NGUYỆT THẠCH">Vũ khí nguyệt thạch</option>
        <option value="THƯỢNG GIỚI">Thượng giới</option>
        <option value="HÓA HÌNH">Hóa hình</option>
        <option value="KẺ RÌNH RẬP">Kẻ rình rập</option>
        <option value="MÁY MÓC">Máy móc</option>
        <option value="TINH NHUỆ">Tinh nhuệ</option>
        <option value="YETI">Yeti</option>
        <option value="KẺ MỘ ĐẠO">Kẻ mộ đạo</option>
        <option value="BẬC THẦY VŨ KHÍ">Bậc thầy vũ khí</option>
      </select>
    </div>
  );
}
