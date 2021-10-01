import React, { FC } from 'react'

import Modal, { ModalProps } from './Modal'

const ModalPoLW: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal title="Title" isOpen={isOpen} setIsOpen={setIsOpen}>
      <p>
        Ut sit amet risus ut quam malesuada cursus ac a magna. Sed lacinia condimentum semper. Mauris hendrerit ornare
        sem ac aliquam. Sed tellus felis, mattis a tristique quis, facilisis et nulla. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla in urna in justo rhoncus luctus. Pellentesque congue ante purus, eu volutpat
        nisl auctor tempor.
      </p>
      <p>
        Quisque vestibulum augue in lorem porttitor, nec ullamcorper ante laoreet. Aenean vitae condimentum elit. Nam
        tempor velit congue pulvinar elementum. Sed in viverra orci. Aenean augue ex, finibus ac gravida in, vulputate
        nec leo. Curabitur vehicula, sem at varius efficitur, eros mi tincidunt massa, ac vulputate felis nisl et est.
        Donec eget sodales dolor. Nullam cursus arcu ut justo tincidunt, eu ullamcorper purus rutrum.
      </p>
      <p>
        In vitae elit ac sapien bibendum finibus. Vivamus venenatis at lectus eget vulputate. Curabitur vitae neque
        felis. Nunc sed ligula et enim posuere faucibus sit amet vel turpis. Nam rutrum sem neque. Vestibulum tincidunt
        sed dui ac molestie. Suspendisse sodales nunc eget purus cursus ultrices. Sed dictum, quam id placerat semper,
        sapien urna ultrices purus, eu euismod orci enim quis enim. Sed a viverra nisl. In massa felis, dictum in
        molestie sed, gravida sit amet mi.
      </p>
      <p>
        Integer facilisis nisi sed nulla hendrerit, nec hendrerit risus placerat. Etiam eu tristique ante. Maecenas
        placerat dictum magna non congue. Integer nisi justo, dignissim quis molestie in, mollis at quam. Curabitur non
        porta urna. Praesent sed dictum justo. Sed semper felis nec mattis dignissim. Suspendisse ut ullamcorper sem.
        Vestibulum elementum, libero eget laoreet feugiat, ex nulla mollis leo, eu tempus ipsum dolor ut massa. Duis
        facilisis, velit id porta interdum, ante eros posuere felis, ac hendrerit dui tortor sit amet sapien. Curabitur
        sit amet massa neque. Nullam ornare malesuada lectus, eget consectetur est lacinia a. Cras id maximus ligula.
        Nulla lacinia dignissim neque a pulvinar. Etiam eu sodales elit.
      </p>
      <p>
        Curabitur mollis metus vel nibh varius, nec euismod massa fringilla. Pellentesque dictum diam neque, ac egestas
        tortor luctus non. Vestibulum fringilla ultricies nibh pellentesque mattis. Fusce pharetra est vel mauris
        eleifend, sit amet pellentesque eros gravida. Phasellus a arcu dolor. Donec non imperdiet arcu. Vestibulum
        malesuada tristique tempor. Vivamus commodo non tortor a bibendum. Etiam eu dignissim metus, ultricies porta
        augue. Nulla dignissim justo nulla. Donec vulputate ex eros, non scelerisque est ullamcorper ac. Ut ultricies,
        velit vitae iaculis ullamcorper, ex enim lacinia tortor, vel pharetra lectus lacus sed elit. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse rutrum, sapien vitae tincidunt lacinia, tellus enim porta
        urna, et molestie nunc orci et massa. Sed bibendum ligula in arcu porttitor pretium. Integer ligula elit,
        eleifend ac nulla ut, placerat mattis libero.
      </p>
    </Modal>
  )
}

export default ModalPoLW
