import SidebarListButton from '@/components/atoms/buttons/SidebarListButton';
import { faBars, faBookBookmark, faSignHanging } from '@fortawesome/free-solid-svg-icons';

export default function MainSidebar() {
  return (
    <div className=" z-20 absolute bg-gray-900 h-full border-r border-gray-700 w-14 overflow-hidden transition-all ease-out hover:w-64">
      <div className="mt-6">
        <div className="w-64">
          <SidebarListButton icon={faBars} text="Danh Sách Thẻ Bài" active={true} />
          <SidebarListButton icon={faSignHanging} text="Con Đường Anh Hùng" active={false} />
          <SidebarListButton icon={faBookBookmark} text="Cốt Truyện Nhân Vật" active={false} />
        </div>
      </div>
    </div>
  );
}
