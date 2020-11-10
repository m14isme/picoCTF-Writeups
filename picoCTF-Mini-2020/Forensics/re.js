var flag = "}.6.f.a.0.9.2.5.f._.3.<._.|.L.m._.1.1.1.t.5._.3.b.{.F.T.C.o.c.i.p";

const reStr = (str) => {
  return str.split(".").reverse().join("");
};

console.log(reStr(flag));

