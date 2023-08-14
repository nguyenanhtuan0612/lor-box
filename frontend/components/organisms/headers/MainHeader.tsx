import FaIconButton from '@/components/atoms/buttons/FaIconButton';
import useWindowSize from '@/components/atoms/hooks/useWindowSize';
import IconNavigation from '@/components/molecules/mainHeader/IconNavigation';
import logo from '@/public/img/logo.png';
import { faBars, faBookBookmark, faHouse, faSignHanging, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Popup from 'reactjs-popup';

export default function MainHeader() {
  const size = useWindowSize();

  function getSize() {
    switch (true) {
      case size.width < 640: {
        return 32;
      }
      default:
        return 40;
    }
  }

  return (
    <div className="bg-gray-900 px-2 h-16 items-center flex gap-2 border-b border-gray-700 justify-between">
      <Image src={logo} height={getSize()} alt="logo"></Image>
      <IconNavigation />
      <div className="block md:hidden relative">
        <Popup
          trigger={
            <div className={`w-8 h-8 active:bg-gray-800 active:rounded-b-none hover:bg-gray-700 flex items-center justify-center hover:rounded-md hover:cursor-pointer`}>
              <FontAwesomeIcon icon={faBars} size={'sm'} color={'white'} />
            </div>
          }
          position={'bottom right'}
          contentStyle={{ padding: '0px', border: 'none' }}
        >
          <div className="bg-gray-800">
            <div className="flex items-center hover:bg-gray-700 px-2 py-1">
              <FaIconButton h="md:h-12 h-8 " w="md:w-12 w-8" size={'sm'} icon={faHouse}></FaIconButton>
              <span className="ml-2 text-sm">Trang chủ</span>
            </div>

            <div className="flex items-center hover:bg-gray-700 px-2 py-1">
              <FaIconButton h="md:h-12 h-8 " w="md:w-12 w-8" size={'sm'} icon={faBars}></FaIconButton>
              <span className="ml-2 text-sm">Danh sách thẻ bài</span>
            </div>
            <div className="flex items-center hover:bg-gray-700 px-2 py-1">
              <FaIconButton h="md:h-12 h-8 " w="md:w-12 w-8" size={'sm'} icon={faSignHanging}></FaIconButton>
              <span className="ml-2 text-sm">Con đường anh hùng</span>
            </div>
            <div className="flex items-center hover:bg-gray-700 px-2 py-1">
              <FaIconButton h="md:h-12 h-8 " w="md:w-12 w-8" size={'sm'} icon={faBookBookmark}></FaIconButton>
              <span className="ml-2 text-sm">Cốt truyện nhân vật</span>
            </div>
            <div className="flex items-center hover:bg-gray-700 px-2 py-1">
              <FaIconButton h="md:h-12 h-8 " w="md:w-12 w-8" size={'sm'} icon={faUser}></FaIconButton>
              <span className="ml-2 text-sm">Tài khoản</span>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}
