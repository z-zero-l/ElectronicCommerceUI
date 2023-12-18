import { area } from "@/utils/area-data.js";
// 根据code获取省份信息
export function getProvinceByCode(code) {
  return area.find((item) => item.code === code.toString());
}

// 省市区code转name
export function codeToName(provinceCode, cityCode, districtCode) {
  let province = area.find((item) => item.code === provinceCode.toString());
  let city = province.children.find(
    (item) => item.code === cityCode.toString()
  );
  let district = city.children.find(
    (item) => item.code === districtCode.toString()
  );
  return province.name + city.name + district.name;
}
