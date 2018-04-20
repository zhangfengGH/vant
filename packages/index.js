// This file is auto gererated by build/bin/build-entry.js
import Actionsheet from './actionsheet';
import AddressEdit from './address-edit';
import Area from './area';
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import CellSwipe from './cell-swipe';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Circle from './circle';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import ContactCard from './contact-card';
import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Field from './field';
import Icon from './icon';
import ImagePreview from './image-preview';
import Lazyload from './lazyload';
import List from './list';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import NumberKeyboard from './number-keyboard';
import Pagination from './pagination';
import PasswordInput from './password-input';
import Picker from './picker';
import Popup from './popup';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Row from './row';
import Search from './search';
import Step from './step';
import Stepper from './stepper';
import Steps from './steps';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';
import Tab from './tab';
import Tabbar from './tabbar';
import TabbarItem from './tabbar-item';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import TreeSelect from './tree-select';
import Uploader from './uploader';

const version = '1.0.8';
const components = [
  Actionsheet,
  AddressEdit,
  Area,
  Button,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  ContactCard,
  DatetimePicker,
  Dialog,
  Field,
  Icon,
  ImagePreview,
  List,
  Loading,
  Locale,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Pagination,
  PasswordInput,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Search,
  Step,
  Stepper,
  Steps,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  AddressEdit,
  Area,
  Button,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Circle,
  Col,
  Collapse,
  CollapseItem,
  ContactCard,
  DatetimePicker,
  Dialog,
  Field,
  Icon,
  ImagePreview,
  Lazyload,
  List,
  Loading,
  Locale,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Pagination,
  PasswordInput,
  Picker,
  Popup,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Search,
  Step,
  Stepper,
  Steps,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader
};

export default {
  install,
  version
};
