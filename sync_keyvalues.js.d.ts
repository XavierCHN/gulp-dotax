declare interface CustomUIConfig {
  chesses: Chesses;
  combos: Combos;
  herolist: Herolist;
  items: Items;
  npc_abilities_custom: Npcabilitiescustom;
  npc_heroes_custom: Npcheroescustom;
  npc_items_custom: Npcitemscustom;
  npc_units_custom: Npcunitscustom;
  particle_points: Particlepoints;
  portraits: Portraits;
  portraits_custom: Portraitscustom;
  vicarious: Vicarious;
  winning_particles: Winningparticles;
  zhujiang: Zhujiang;
  abilities_common: Abilitiescommon;
  abilities_override: Abilitiesoverride;
  abilities_qun: Abilitiesqun;
  abilities_shu: Abilitiesshu;
  abilities_wei: Abilitieswei;
  abilities_wu: Abilitieswu;
}
interface Abilitieswu {
  yu_fan: Yufan;
  ji_yan: Jiyan;
  jie_fan: Jiefan;
  po_lu: Polu;
  xi_sheng: Xisheng;
  ku_rou: Kurou;
  zheng_bing: Zhengbing;
  ying_yang: Yingyang;
  du_zhan: Duzhan;
  qu_ming: Quming;
  lian_zhu: Lianzhu;
  lian_mian_bu_jue: Lianmianbujue;
  du_jiang: Dujiang;
  di_meng: Dimeng;
  liang_zhu: Liangzhu;
}
interface Liangzhu {
  BaseClass: string;
  ScriptFile: string;
  AbilityType: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetFlags: string;
  AbilityValues: AbilityValues107;
  AbilityCooldown: string;
  AbilityManaCost: string;
}
interface AbilityValues107 {
  radius: string;
  bonus_damage: string;
  duration: string;
}
interface Dimeng {
  BaseClass: string;
  ScriptFile: string;
  AbilityType: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetFlags: string;
  SpellImmunityType: string;
  AbilityUnitDamageType: string;
  AbilityChannelTime: string;
  AbilityDuration: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityValues: AbilityValues106;
}
interface AbilityValues106 {
  duration: string;
  target_num: string;
  health_regen: string;
  health_lose: string;
  radius: string;
}
interface Dujiang {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityType: string;
  SpellDispellableType: string;
  FightRecapLevel: string;
  AbilityTextureName: string;
  AbilitySound: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityValues: AbilityValues105;
}
interface AbilityValues105 {
  duration: string;
  radius: string;
  miss_chance: string;
}
interface Lianmianbujue {
  BaseClass: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  MaxLevel: string;
  AbilitySpecial: AbilitySpecial159;
}
interface AbilitySpecial159 {
  '01': _0190;
  '02': _02109;
}
interface _02109 {
  var_type: string;
  arrow_angle: string;
}
interface _0190 {
  var_type: string;
  arrow_split: string;
}
interface Lianzhu {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastPoint: string;
  AbilityChannelTime: string;
  AbilityCastRange: string;
  AbilityValues: AbilityValues104;
}
interface AbilityValues104 {
  arrow_count: string;
  arrow_interval: string;
  damage: string;
  damage_pct: string;
  damage_reduction: string;
  width: string;
  speed: string;
  range: string;
  arrow_split: string;
  arrow_angle: string;
}
interface Quming {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilitySpecial: AbilitySpecial158;
}
interface AbilitySpecial158 {
  '01': _0189;
  '02': _02108;
  '03': _0393;
}
interface _0393 {
  var_type: string;
  max_hp_pct: string;
}
interface _02108 {
  var_type: string;
  max_magical_resist: string;
}
interface _0189 {
  var_type: string;
  max_armor: string;
}
interface Duzhan {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityType: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityUnitDamageType: string;
  AbilityValues: AbilityValues103;
  precache: Precache4;
}
interface AbilityValues103 {
  damage_bonus: string;
  damage_bonus_pct: string;
  radius: string;
  stun_duration: string;
}
interface Yingyang {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetFlags: string;
  AbilityType: string;
  AbilityUnitTargetTeam: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues102;
}
interface AbilityValues102 {
  damage_bonus: string;
  duration: string;
}
interface Zhengbing {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityValues: AbilityValues101;
}
interface AbilityValues101 {
  unit_num: string;
  unit_scale: string;
}
interface Kurou {
  BaseClass: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityUnitDamageType: string;
  AbilityCastPoint: string;
  ScriptFile: string;
  precache: Precache2;
  AbilityValues: AbilityValues100;
}
interface AbilityValues100 {
  self_damage_pct: string;
  damage: string;
  max_hp_damage_pct: string;
  radius: string;
}
interface Xisheng {
  BaseClass: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  precache: Precache5;
  OnSpellStart: OnSpellStart6;
  AbilitySpecial: AbilitySpecial157;
  Modifiers: Modifiers5;
}
interface Modifiers5 {
  modifier_huang_gai_xi_sheng: Modifierhuanggaixisheng;
}
interface Modifierhuanggaixisheng {
  OnCreated: OnSpellStart6;
}
interface AbilitySpecial157 {
  '01': _0188;
  '02': _02107;
  '03': _0392;
  '04': _0482;
}
interface _0482 {
  var_type: string;
  u_damage_tip: string;
}
interface _0392 {
  var_type: string;
  my_damage_tip: string;
}
interface _02107 {
  var_type: string;
  u_damage: string;
}
interface _0188 {
  var_type: string;
  my_damage: string;
}
interface OnSpellStart6 {
  RunScript: RunScript3;
}
interface Precache5 {
  soundfile: string;
  particle: string;
  model: string;
}
interface Polu {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetFlags: string;
  AbilityCooldown: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityValues: AbilityValues99;
}
interface AbilityValues99 {
  damage: string;
  radius: string;
  attack_interval: string;
}
interface Jiefan {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilitySound: string;
  AbilityValues: AbilityValues98;
}
interface AbilityValues98 {
  bonus_damage: string;
  ci_shu_max: string;
  stun_duration: string;
}
interface Jiyan {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetFlags: string;
  SpellImmunityType: string;
  AbilityType: string;
  AbilityUnitDamageType: string;
  AbilityUnitTargetTeam: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial156;
}
interface AbilitySpecial156 {
  '01': _016;
  '02': _02106;
  '03': _0391;
  '04': _0481;
  '05': _0725;
}
interface _0481 {
  var_type: string;
  launch_distance: string;
}
interface _0391 {
  var_type: string;
  launch_times: string;
}
interface _02106 {
  var_type: string;
  attack_damage_pct: string;
}
interface Yufan {
  BaseClass: string;
  AbilityType: string;
  AbilityBehavior: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  FightRecapLevel: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial155;
  precache: Precache2;
  OnSpellStart: OnSpellStart5;
  Modifiers: Modifiers4;
}
interface Modifiers4 {
  modifier_gosht_ship_stun: Modifiergoshtshipstun;
}
interface Modifiergoshtshipstun {
  States: States;
  EffectName: string;
  EffectAttachType: string;
}
interface States {
  MODIFIER_STATE_STUNNED: string;
}
interface OnSpellStart5 {
  FireSound: FireSound;
  RunScript: RunScript3;
}
interface AbilitySpecial155 {
  '01': _0240;
  '02': _0339;
  '03': _092;
  '04': _0716;
  '05': _016;
  '06': _0656;
}
interface _0656 {
  var_type: string;
  damage_const_pct: string;
}
interface Abilitieswei {
  gui_xin: Guixin;
  jiu_yuan: Jiuyuan;
  jian_yu: Jianyu;
  qu_hu: Quhu;
  xiao_guo: Xiaoguo;
  tian_du: Tiandu;
  yi_zhong: Yizhong;
  xian_ji: Xianji;
  duan_liang: Duanliang;
  fan_kui: Fankui;
  qi_xi: Qixi;
  fang_zhu: Fangzhu;
  li_zhan: Lizhan;
  luo_yi: Luoyi;
  kui_wei: Kuiwei;
}
interface Kuiwei {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityType: string;
  SpellImmunityType: string;
  SpellDispellableType: string;
  AbilityTextureName: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues97;
}
interface AbilityValues97 {
  range: string;
  damage_pct: string;
  angle: string;
}
interface Luoyi {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityType: string;
  SpellImmunityType: string;
  SpellDispellableType: string;
  AbilityTextureName: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues96;
}
interface AbilityValues96 {
  act_bonus_pct: string;
  duration: string;
}
interface Lizhan {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityType: string;
  SpellImmunityType: string;
  SpellDispellableType: string;
  AbilityTextureName: string;
  AbilityValues: AbilityValues95;
}
interface AbilityValues95 {
  stun_chance: string;
  stun_duration: string;
  health_bound: string;
  crit_pct: string;
}
interface Fangzhu {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityType: string;
  SpellImmunityType: string;
  SpellDispellableType: string;
  AbilityTextureName: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues94;
}
interface AbilityValues94 {
  exile_time: string;
  exile_nums: string;
}
interface Qixi {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityType: string;
  SpellImmunityType: string;
  SpellDispellableType: string;
  AbilityTextureName: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues93;
}
interface AbilityValues93 {
  pounce_times: string;
  stun_duration: string;
  damage: string;
  attack_damage_pct: string;
  pounce_speed: string;
}
interface Fankui {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityType: string;
  SpellImmunityType: string;
  SpellDispellableType: string;
  AbilityTextureName: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues92;
}
interface AbilityValues92 {
  shield: string;
  range: string;
  duration: string;
  stun_duration: string;
  damage: string;
  attack_damage_pct: string;
}
interface Duanliang {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  MaxLevel: string;
  AbilityCastRange: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityUnitDamageType: string;
  AbilityValues: AbilityValues91;
}
interface AbilityValues91 {
  damage: string;
  attack_damage_pct: string;
  disarmed_duration: string;
}
interface Xianji {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AnimationPlaybackRate: string;
  FightRecapLevel: string;
  MaxLevel: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues90;
}
interface AbilityValues90 {
  duration: string;
  attackspeed: string;
}
interface Yizhong {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  AbilityChannelTime: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues89;
}
interface AbilityValues89 {
  damage_reduce_pct: string;
}
interface Tiandu {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  AbilityChannelTime: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues88;
}
interface AbilityValues88 {
  damage: string;
  attack_damage_pct: string;
  health_pct: string;
  stun_duration: string;
  lightning_interval: string;
}
interface Xiaoguo {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetFlags: string;
  AbilityValues: AbilityValues87;
}
interface AbilityValues87 {
  crit_chance: string;
  crit_pct: string;
}
interface Quhu {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  MaxLevel: string;
  AbilityValues: AbilityValues86;
}
interface AbilityValues86 {
  floating_duration: string;
  stun_duration: string;
  damage: string;
  attack_damage_const_pct: string;
  stun_radius: string;
}
interface Jianyu {
  BaseClass: string;
  AbilityType: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetFlag: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityCastAnimation: string;
  AnimationPlaybackRate: string;
  AbilityManaCost: string;
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  precache: Precache2;
  AbilityValues: AbilityValues85;
  OnSpellStart: OnSpellStart4;
  Modifiers: Modifiers3;
}
interface Modifiers3 {
  modifier_jian_yu: Modifierjianyu;
}
interface Modifierjianyu {
  Duration: string;
  Passive: string;
  IsHidden: string;
  IsBuff: string;
  OnAttack: OnSpellStart2;
  Properties: Properties2;
  EffectName: string;
  EffectAttachType: string;
}
interface Properties2 {
  MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE: string;
}
interface OnSpellStart4 {
  FireSound: FireSound;
  FireEffect: FireEffect;
  ApplyModifier: ApplyModifier;
}
interface FireEffect {
  EffectName: string;
  EffectAttachType: string;
  Target: string;
}
interface AbilityValues85 {
  attack_damage_percent: string;
  attack_damage_reduce_pct: string;
  duration: string;
  arrow_count: string;
  range: string;
}
interface Jiuyuan {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  SpellImmunityType: string;
  FightRecapLevel: string;
  MaxLevel: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues84;
}
interface AbilityValues84 {
  duration: string;
  shield_health: string;
  health_pct: string;
}
interface Guixin {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityType: string;
  MaxLevel: string;
  FightRecapLevel: string;
  AbilityTextureName: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityCastAnimation: string;
  AbilityValues: AbilityValues83;
  precache: Precache2;
}
interface AbilityValues83 {
  duration: string;
}
interface Abilitiesshu {
  ren_de: Rende;
  tuo_dao: Tuodao;
  chong_zhen: Chongzhen;
  fei_zhua: Feizhua;
  kuang_feng: Kuangfeng;
  ju_qi: Juqi;
  qian_xi: Qianxi;
  lie_gong: Liegong;
  tiao_xin: Tiaoxin;
  lian_huan: Lianhuan;
  xuan_huo: Xuanhuo;
  pao_xiao: Paoxiao;
  fang_quan: Fangquan;
}
interface Fangquan {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  SpellDispellableType: string;
  SpellImmunityType: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityCastAnimation: string;
  AbilityValues: DOTAAbilities;
}
interface Paoxiao {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellDispellableType: string;
  SpellImmunityType: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastAnimation: string;
  AbilityValues: AbilityValues82;
}
interface AbilityValues82 {
  range: string;
  duration: string;
  armor_reduce: string;
}
interface Xuanhuo {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellDispellableType: string;
  SpellImmunityType: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastAnimation: string;
  AbilityValues: AbilityValues81;
}
interface AbilityValues81 {
  target_num: string;
  cooldown_slow: string;
}
interface Lianhuan {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  SpellImmunityType: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues80;
}
interface AbilityValues80 {
  counts: string;
  damage_share_percentage: string;
  duration: string;
}
interface Tiaoxin {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  SpellImmunityType: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues79;
}
interface AbilityValues79 {
  taunt_range: string;
  bonus_evade: string;
  taunt_duration: string;
  stun_duration: string;
}
interface Liegong {
  BaseClass: string;
  AbilityType: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetFlags: string;
  SpellImmunityType: string;
  FightRecapLevel: string;
  AbilityTextureName: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityChannelTime: string;
  AbilityCastAnimation: string;
  AbilityValues: AbilityValues78;
  precache: Precache2;
  OnSpellStart: OnSpellStart3;
  OnChannelFinish: OnChannelFinish;
  OnProjectileHitUnit: OnProjectileHitUnit;
  Modifiers: Modifiers2;
}
interface Modifiers2 {
  modifier_powershot_charge_datadriven: Modifierpowershotchargedatadriven;
}
interface Modifierpowershotchargedatadriven {
  Duration: string;
  OnCreated: OnSpellStart2;
  ThinkInterval: string;
  OnIntervalThink: OnSpellStart2;
}
interface OnProjectileHitUnit {
  DeleteOnHit: string;
  RunScript: RunScript2;
}
interface OnChannelFinish {
  RemoveModifier: ApplyModifier;
  RunScript: RunScript2;
}
interface OnSpellStart3 {
  FireSound: FireSound;
  RunScript: RunScript3;
  ApplyModifier: ApplyModifier;
}
interface ApplyModifier {
  Target: string;
  ModifierName: string;
}
interface RunScript3 {
  ScriptFile: string;
  Function: string;
  Target: string;
}
interface AbilityValues78 {
  damage: string;
  attack_const_pct: string;
  arrow_width: string;
  arrow_range: string;
  arrow_speed: string;
  charge_interval: string;
  damage_per_interval: string;
  charge_time: string;
}
interface Qianxi {
  BaseClass: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  FightRecapLevel: string;
  SpellDispellableType: string;
  AbilitySound: string;
  AbilityManaCost: string;
  AbilityCooldown: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  ScriptFile: string;
  precache: Precache4;
  AbilityValues: AbilityValues77;
}
interface AbilityValues77 {
  duration: string;
  extra_time: string;
  bonus_regen_pct: string;
  trigger_health_pct: string;
}
interface Precache4 {
  particle: string;
}
interface Juqi {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues76;
}
interface AbilityValues76 {
  delay_time: string;
  damage: string;
  damage_percent: string;
  radius: string;
  pull_duration: string;
}
interface Kuangfeng {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitDamageType: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AnimationIgnoresModelScale: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  MaxLevel: string;
  SpellImmunityType: string;
  AbilityValues: AbilityValues75;
}
interface AbilityValues75 {
  dps: string;
  attack_damage_pct: string;
  interval: string;
  move_speed_slow: string;
  attack_speed_slow: string;
  radius: string;
  tornado_count: string;
  duration: string;
  speed: string;
}
interface Feizhua {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitDamageType: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityTextureName: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AnimationIgnoresModelScale: string;
  MaxLevel: string;
  precache: Precache2;
  AbilityValues: AbilityValues74;
}
interface AbilityValues74 {
  damage: string;
  attack_damage_pct: string;
  knockback_duration: string;
}
interface Chongzhen {
  BaseClass: string;
  AbilityTextureName: string;
  ScriptFile: string;
  AbilityType: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetFlags: string;
  SpellImmunityType: string;
  AbilityUnitDamageType: string;
  FightRecapLevel: string;
  AbilityCastAnimation: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilityValues: AbilityValues73;
}
interface AbilityValues73 {
  damage: string;
  damage_const_pct: string;
  count: string;
  interval: string;
  radius: string;
}
interface Tuodao {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetFlags: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  AbilityValues: AbilityValues72;
}
interface AbilityValues72 {
  min_damage_pct: string;
  max_damage_pct: string;
  speed: string;
  incoming_damage: string;
}
interface Rende {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetFlags: string;
  AbilityCastRange: string;
  AbilityCastAnimation: string;
  AbilityManaCost: string;
  AbilityCooldown: string;
  AbilityCastPoint: string;
  AbilityValues: AbilityValues71;
}
interface AbilityValues71 {
  health_const: string;
  bonus_percentage: string;
  radius: string;
}
interface Abilitiesqun {
  lei_ji: Leiji;
  mei_huo: Meihuo;
  huan_hua: Huanhua;
  meng_jin: Mengjin;
  luan_wu: Luanwu;
  ming_ce: Mingce;
  jiu_chi: Jiuchi;
  wu_shuang: Wushuang;
  zong_shi: Zongshi;
  jun_wei: Junwei;
  qing_nang: Qingnang;
  xian_zhen: Xianzhen;
  bei_ge: Beige;
}
interface Beige {
  BaseClass: string;
  ScriptFile: string;
  MaxLevel: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  AbilityManaCost: string;
  AbilityCooldown: string;
  AbilityCastPoint: string;
  AbilityCastAnimation: string;
  precache: Precache3;
  AbilitySpecial: AbilitySpecial154;
}
interface AbilitySpecial154 {
  '01': _063;
  '02': _0633;
  '03': _0390;
  '04': _0726;
  '05': _0570;
  '06': _0636;
  '07': _048;
}
interface _0570 {
  var_type: string;
  max_damage_factor: string;
}
interface _0390 {
  var_type: string;
  min_damage_factor: string;
}
interface Precache3 {
  soundfile: string;
}
interface Xianzhen {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  SpellImmunityType: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityValues: AbilityValues70;
  precache: Precache2;
}
interface AbilityValues70 {
  duration: string;
  radius: string;
  incomming_pct: string;
  attack_speed: string;
}
interface Qingnang {
  BaseClass: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  FightRecapLevel: string;
  MaxLevel: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  precache: Precache2;
  AbilitySpecial: AbilitySpecial153;
  OnSpellStart: OnSpellStart2;
  Modifiers: Modifiers;
}
interface Modifiers {
  modifier_qing_nang: Modifierqingnang;
}
interface Modifierqingnang {
  Duration: string;
  Passive: string;
  IsHidden: string;
  IsBuff: string;
  IsDebuff: string;
  IsPurgable: string;
  TextureName: string;
  EffectName: string;
  EffectAttachType: string;
  FireSound: FireSound;
  Properties: Properties;
}
interface Properties {
  MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE: string;
}
interface OnSpellStart2 {
  RunScript: RunScript2;
}
interface RunScript2 {
  ScriptFile: string;
  Function: string;
}
interface AbilitySpecial153 {
  '01': _063;
  '02': _02105;
  '03': _0389;
  '04': _0480;
  '05': _0569;
  '06': _0655;
  '07': _0529;
  '08': _0840;
}
interface _0840 {
  var_type: string;
  attack_pct: string;
}
interface _0655 {
  var_type: string;
  health_per_second: string;
}
interface _0569 {
  var_type: string;
  heal_constant: string;
}
interface _0480 {
  var_type: string;
  golem_bonus_as: string;
}
interface _0389 {
  var_type: string;
  golem_bonus_ms_pct: string;
}
interface _02105 {
  var_type: string;
  tick_value: string;
}
interface Junwei {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityType: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityValues: AbilityValues69;
}
interface AbilityValues69 {
  num: string;
  unit_scale: string;
  incomming_pct: string;
}
interface Zongshi {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityType: string;
  AbilityTextureName: string;
  MaxLevel: string;
  AbilityValues: AbilityValues68;
}
interface AbilityValues68 {
  duration: string;
  armor_bonus: string;
  hp_pct: string;
}
interface Wushuang {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityValues: AbilityValues67;
  precache: Precache2;
}
interface AbilityValues67 {
  duration: string;
  fl_height: string;
  attack_count: string;
  angle: string;
  radius: string;
}
interface Jiuchi {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityValues: AbilityValues66;
  precache: Precache2;
}
interface AbilityValues66 {
  duration: string;
  shield_const: string;
  shield_pct: string;
  radius: string;
  miss_pct: string;
}
interface Mingce {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  precache: Precache2;
}
interface Luanwu {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityValues: AbilityValues65;
  precache: Precache2;
}
interface AbilityValues65 {
  line_num: string;
  duration: string;
  damage_const: string;
  damage_const_pct: string;
  radius: string;
  max_distance: string;
  project_speed: string;
}
interface Mengjin {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityValues: AbilityValues64;
  precache: Precache2;
}
interface AbilityValues64 {
  stunned_duration: string;
  damage_const: string;
  damage_const_pct: string;
  radius: string;
  speed: string;
}
interface Huanhua {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityValues: AbilityValues63;
  precache: DOTAAbilities;
}
interface AbilityValues63 {
  illusion_num: string;
  duration: string;
  incoming_damage: string;
  outgoing_damage: string;
  radius: string;
}
interface Meihuo {
  BaseClass: string;
  ScriptFile: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  AbilityCastAnimation: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityValues: AbilityValues62;
  precache: Precache2;
}
interface AbilityValues62 {
  radius: string;
  target_num: string;
  duration: string;
  magic_resistance_reduce: string;
}
interface Leiji {
  BaseClass: string;
  AbilityType: string;
  AbilityBehavior: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetType: string;
  AbilityUnitDamageType: string;
  SpellImmunityType: string;
  FightRecapLevel: string;
  AbilityTextureName: string;
  AbilityCastRange: string;
  AbilityCastAnimation: string;
  precache: Precache2;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial152;
  OnAbilityPhaseStart: OnAbilityPhaseStart;
  OnSpellStart: OnSpellStart;
}
interface OnSpellStart {
  RunScript: RunScript;
  FireSound: FireSound;
}
interface RunScript {
  ScriptFile: string;
  Function: string;
  sound: string;
  particle: string;
  Target: string;
}
interface OnAbilityPhaseStart {
  FireSound: FireSound;
}
interface FireSound {
  EffectName: string;
  Target: string;
}
interface AbilitySpecial152 {
  '01': _016;
  '02': _02104;
}
interface _02104 {
  var_type: string;
  damage_const: string;
}
interface Precache2 {
  particle: string;
  soundfile: string;
}
interface Abilitiesoverride {
  earthshaker_echo_slam: Earthshakerechoslam;
  sandking_epicenter: Sandkingepicenter;
  earth_spirit_magnetize: Earthspiritmagnetize;
  pangolier_gyroshell: Pangoliergyroshell;
  lina_laguna_blade: Linalagunablade;
  clinkz_burning_army: Clinkzburningarmy;
  batrider_flaming_lasso: Batriderflaminglasso;
  ogre_magi_multicast: Ogremagimulticast;
  tinker_rearm: Tinkerrearm;
  rattletrap_hookshot: Rattletraphookshot;
  bounty_hunter_track: Bountyhuntertrack;
  alchemist_chemical_rage: Alchemistchemicalrage;
  crystal_maiden_freezing_field: Crystalmaidenfreezingfield;
  ancient_apparition_ice_blast: Ancientapparitioniceblast;
  winter_wyvern_winters_curse: Winterwyvernwinterscurse;
  tusk_walrus_punch: Tuskwalruspunch;
  furion_teleportation: Furionteleportation;
  bristleback_warpath: Bristlebackwarpath;
  dark_willow_terrorize: Darkwillowterrorize;
  treant_overgrowth: Treantovergrowth;
  brewmaster_primal_split: Brewmasterprimalsplit;
  centaur_stampede: Centaurstampede;
  elder_titan_earth_splitter: Eldertitanearthsplitter;
  nevermore_requiem: Nevermorerequiem;
  chaos_knight_phantasm: Chaosknightphantasm;
  razor_eye_of_the_storm: Razoreyeofthestorm;
  gyrocopter_call_down: Gyrocoptercalldown;
  shredder_chakram: Shredderchakram;
  tidehunter_ravage: Tidehunterravage;
  naga_siren_song_of_the_siren: Nagasirensongofthesiren;
  medusa_stone_gaze: Medusastonegaze;
  beastmaster_primal_roar: Beastmasterprimalroar;
  weaver_time_lapse: Weavertimelapse;
  lone_druid_true_form: Lonedruidtrueform;
  abyssal_underlord_dark_rift: Abyssalunderlorddarkrift;
  phoenix_supernova: Phoenixsupernova;
  enigma_black_hole: Enigmablackhole;
  meepo_divided_we_stand: Meepodividedwestand;
  dragon_knight_elder_dragon_form: Dragonknightelderdragonform;
  sven_gods_strength: Svengodsstrength;
  zuus_thundergods_wrath: Zuusthundergodswrath;
  morphling_replicate: Morphlingreplicate;
  slark_shadow_dance: Slarkshadowdance;
  ursa_enrage: Ursaenrage;
  lycan_shapeshift: Lycanshapeshift;
  nyx_assassin_vendetta: Nyxassassinvendetta;
  magnataur_reverse_polarity: Magnataurreversepolarity;
  warlock_rain_of_chaos: Warlockrainofchaos;
  doom_bringer_doom: Doombringerdoom;
  terrorblade_sunder: Terrorbladesunder;
  kunkka_ghostship: Kunkkaghostship;
  slardar_amplify_damage: Slardaramplifydamage;
  enchantress_natures_attendants: Enchantressnaturesattendants;
  broodmother_insatiable_hunger: Broodmotherinsatiablehunger;
  juggernaut_omni_slash: Juggernautomnislash;
  windrunner_focusfire: Windrunnerfocusfire;
  phantom_assassin_coup_de_grace: Phantomassassincoupdegrace;
  pudge_dismember: Pudgedismember;
  ember_spirit_fire_remnant: Emberspiritfireremnant;
  luna_eclipse: Lunaeclipse;
  queenofpain_sonic_wave: Queenofpainsonicwave;
  antimage_mana_void: Antimagemanavoid;
  mirana_invis: Miranainvis;
  lion_finger_of_death: Lionfingerofdeath;
  tiny_grow: Tinygrow;
  witch_doctor_death_ward: Witchdoctordeathward;
  vengefulspirit_nether_swap: Vengefulspiritnetherswap;
  bane_fiends_grip: Banefiendsgrip;
  skeleton_king_reincarnation: Skeletonkingreincarnation;
  storm_spirit_ball_lightning: Stormspiritballlightning;
  drow_ranger_marksmanship: Drowrangermarksmanship;
  axe_culling_blade: Axecullingblade;
  bloodseeker_rupture: Bloodseekerrupture;
  phantom_lancer_juxtapose: Phantomlancerjuxtapose;
  puck_dream_coil: Puckdreamcoil;
  lich_chain_frost: Lichchainfrost;
  shadow_shaman_mass_serpent_ward: Shadowshamanmassserpentward;
  riki_backstab: Rikibackstab;
  sniper_assassinate: Sniperassassinate;
  necrolyte_reapers_scythe: Necrolytereapersscythe;
  venomancer_poison_nova: Venomancerpoisonnova;
  faceless_void_chronosphere: Facelessvoidchronosphere;
  death_prophet_exorcism: Deathprophetexorcism;
  pugna_life_drain: Pugnalifedrain;
  templar_assassin_psionic_trap: Templarassassinpsionictrap;
  viper_viper_strike: Viperviperstrike;
  dazzle_bad_juju: Dazzlebadjuju;
  leshrac_pulse_nova: Leshracpulsenova;
  life_stealer_infest: Lifestealerinfest;
  dark_seer_wall_of_replica: Darkseerwallofreplica;
  omniknight_guardian_angel: Omniknightguardianangel;
  huskar_life_break: Huskarlifebreak;
  night_stalker_darkness: Nightstalkerdarkness;
  jakiro_macropyre: Jakiromacropyre;
  chen_hand_of_god: Chenhandofgod;
  spectre_haunt: Spectrehaunt;
  spirit_breaker_nether_strike: Spiritbreakernetherstrike;
  invoker_invoke: Invokerinvoke;
  silencer_global_silence: Silencerglobalsilence;
  obsidian_destroyer_sanity_eclipse: Obsidiandestroyersanityeclipse;
  shadow_demon_demonic_purge: Shadowdemondemonicpurge;
  undying_flesh_golem: Undyingfleshgolem;
  rubick_spell_steal: Rubickspellsteal;
  disruptor_static_storm: Disruptorstaticstorm;
  keeper_of_the_light_will_o_wisp: Keeperofthelightwillowisp;
  visage_summon_familiars: Visagesummonfamiliars;
  wisp_relocate: Wisprelocate;
  troll_warlord_battle_trance: Trollwarlordbattletrance;
  skywrath_mage_mystic_flare: Skywrathmagemysticflare;
  abaddon_borrowed_time: Abaddonborrowedtime;
  legion_commander_duel: Legioncommanderduel;
  oracle_false_promise: Oraclefalsepromise;
  techies_land_mines: Techieslandmines;
  arc_warden_tempest_double: Arcwardentempestdouble;
  monkey_king_wukongs_command: Monkeykingwukongscommand;
  grimstroke_soul_chain: Grimstrokesoulchain;
  mars_arena_of_blood: Marsarenaofblood;
  earthshaker_fissure: Earthshakerfissure;
  sandking_burrowstrike: Sandkingburrowstrike;
  clinkz_death_pact: Clinkzdeathpact;
  crystal_maiden_brilliance_aura: Crystalmaidenbrillianceaura;
  ancient_apparition_chilling_touch: Ancientapparitionchillingtouch;
  furion_wrath_of_nature: Furionwrathofnature;
  treant_leech_seed: Treantleechseed;
  chaos_knight_chaos_strike: Chaosknightchaosstrike;
  beastmaster_inner_beast: Beastmasterinnerbeast;
  phoenix_icarus_dive: Phoenixicarusdive;
  sven_warcry: Svenwarcry;
  zuus_cloud: Zuuscloud;
  lycan_summon_wolves: Lycansummonwolves;
  warlock_upheaval: Warlockupheaval;
  terrorblade_metamorphosis: Terrorblademetamorphosis;
  kunkka_tidebringer: Kunkkatidebringer;
  broodmother_incapacitating_bite: Broodmotherincapacitatingbite;
  windrunner_windrun: Windrunnerwindrun;
  queenofpain_scream_of_pain: Queenofpainscreamofpain;
  mirana_leap: Miranaleap;
  skeleton_king_mortal_strike: Skeletonkingmortalstrike;
  drow_ranger_frost_arrows: Drowrangerfrostarrows;
  axe_berserkers_call: Axeberserkerscall;
  sniper_shrapnel: Snipershrapnel;
  dazzle_shallow_grave: Dazzleshallowgrave;
  omniknight_degen_aura: Omniknightdegenaura;
  night_stalker_hunter_in_the_night: Nightstalkerhunterinthenight;
  silencer_glaives_of_wisdom: Silencerglaivesofwisdom;
  shadow_demon_disruption: Shadowdemondisruption;
  undying_tombstone: Undyingtombstone;
  rubick_arcane_supremacy: Rubickarcanesupremacy;
  keeper_of_the_light_chakra_magic: Keeperofthelightchakramagic;
  abaddon_frostmourne: Abaddonfrostmourne;
  techies_suicide: Techiessuicide;
  mars_bulwark: Marsbulwark;
}
interface Marsbulwark {
  AbilitySpecial: AbilitySpecial151;
}
interface AbilitySpecial151 {
  '01': _0187;
  '02': _02103;
  '03': _0388;
  '04': _0479;
  '05': _0568;
  '06': _0654;
  '07': _0742;
}
interface _0742 {
  var_type: string;
  redirect_speed_penatly: string;
}
interface _0654 {
  var_type: string;
  redirect_range: string;
}
interface _0568 {
  var_type: string;
  redirect_chance: string;
}
interface _0479 {
  var_type: string;
  side_angle: string;
}
interface _0388 {
  var_type: string;
  physical_damage_reduction_side: string;
}
interface _02103 {
  var_type: string;
  forward_angle: string;
}
interface _0187 {
  var_type: string;
  physical_damage_reduction: string;
}
interface Techiessuicide {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial150;
}
interface AbilitySpecial150 {
  '01': _063;
  '02': _103;
  '03': _08;
  '04': _0478;
  '05': _027;
}
interface _0478 {
  var_type: string;
  hp_cost: string;
}
interface Abaddonfrostmourne {
  AbilitySpecial: AbilitySpecial149;
}
interface AbilitySpecial149 {
  '01': _09;
  '02': _108;
  '03': _0248;
  '04': _0477;
  '05': _0567;
  '06': _0653;
}
interface _0653 {
  var_type: string;
  curse_attack_speed: string;
  LinkedSpecialBonus: string;
}
interface _0567 {
  var_type: string;
  curse_slow: string;
}
interface _0477 {
  var_type: string;
  curse_duration: string;
}
interface Keeperofthelightchakramagic {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial148;
}
interface AbilitySpecial148 {
  '01': _0186;
  '02': _0150;
  '03': _0387;
  '04': _027;
}
interface _0387 {
  var_type: string;
  mana_leak_pct: string;
}
interface _0186 {
  var_type: string;
  mana_restore: string;
  LinkedSpecialBonus: string;
}
interface Rubickarcanesupremacy {
  AbilitySpecial: AbilitySpecial147;
}
interface AbilitySpecial147 {
  '01': _0185;
  '02': _0238;
}
interface _0185 {
  var_type: string;
  spell_amp: string;
}
interface Undyingtombstone {
  AbilityCastGestureSlot: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial146;
}
interface AbilitySpecial146 {
  '01': _0184;
  '02': _0631;
  '03': _027;
  '04': _063;
  '05': _0566;
  '06': _0652;
}
interface _0652 {
  var_type: string;
  zombie_interval: string;
}
interface _0566 {
  var_type: string;
  health_threshold_pct_tooltip: string;
}
interface _0184 {
  var_type: string;
  tombstone_health: string;
}
interface Shadowdemondisruption {
  AbilityDuration: string;
  AbilityCooldown: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial145;
}
interface AbilitySpecial145 {
  '01': _0183;
  '02': _0445;
  '03': _0386;
  '04': _0476;
  '05': _0565;
  '06': _0651;
  '07': _0741;
}
interface _0651 {
  var_type: string;
  tooltip_total_illusion_incoming_damage: string;
}
interface _0565 {
  var_type: string;
  illusion_incoming_damage: string;
}
interface _0476 {
  var_type: string;
  illusion_outgoing_tooltip: string;
}
interface _0386 {
  var_type: string;
  illusion_outgoing_damage: string;
}
interface _0183 {
  var_type: string;
  disruption_duration: string;
  LinkedSpecialBonus: string;
}
interface Silencerglaivesofwisdom {
  AbilityDuration: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial144;
}
interface AbilitySpecial144 {
  '01': _0182;
  '02': _02102;
  '03': _0385;
}
interface _0385 {
  var_type: string;
  int_steal_duration: string;
}
interface _02102 {
  var_type: string;
  int_steal: string;
}
interface _0182 {
  var_type: string;
  intellect_damage_pct: string;
  LinkedSpecialBonus: string;
}
interface Nightstalkerhunterinthenight {
  AbilitySpecial: AbilitySpecial143;
}
interface AbilitySpecial143 {
  '01': _0181;
  '02': _02101;
}
interface _02101 {
  var_type: string;
  bonus_attack_speed_night: string;
  LinkedSpecialBonus: string;
}
interface _0181 {
  var_type: string;
  bonus_movement_speed_pct_night: string;
}
interface Omniknightdegenaura {
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial142;
}
interface AbilitySpecial142 {
  '01': _0180;
  '02': _02100;
  '03': _063;
}
interface _02100 {
  var_type: string;
  attack_bonus_tooltip: string;
  LinkedSpecialBonus: string;
}
interface _0180 {
  var_type: string;
  speed_bonus: string;
  LinkedSpecialBonus: string;
}
interface Dazzleshallowgrave {
  AbilityCastGestureSlot: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial141;
}
interface AbilitySpecial141 {
  '01': _027;
}
interface Snipershrapnel {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityCharges: string;
  AbilityChargeRestoreTime: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial140;
}
interface AbilitySpecial140 {
  '01': _0179;
  '02': _063;
  '03': _0384;
  '04': _027;
  '05': _0564;
  '06': _09;
  '07': _0741;
}
interface _0741 {
  var_type: string;
  AbilityCharges: string;
  LinkedSpecialBonus: string;
}
interface _0564 {
  var_type: string;
  damage_delay: string;
}
interface _0384 {
  var_type: string;
  shrapnel_damage: string;
  LinkedSpecialBonus: string;
}
interface _0179 {
  var_type: string;
  slow_movement_speed: string;
  LinkedSpecialBonus: string;
}
interface Axeberserkerscall {
  AbilityCastPoint: string;
  AbilityCastGestureSlot: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial139;
}
interface AbilitySpecial139 {
  '01': _0219;
  '02': _0312;
  '03': _027;
}
interface Drowrangerfrostarrows {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial138;
}
interface AbilitySpecial138 {
  '01': _0178;
  '02': _016;
}
interface _0178 {
  var_type: string;
  frost_arrows_movement_speed: string;
}
interface Skeletonkingmortalstrike {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial137;
}
interface AbilitySpecial137 {
  '01': _0177;
  '02': _0299;
  '03': _0383;
  '04': _0475;
  '05': _073;
  '06': _0139;
}
interface _0475 {
  var_type: string;
  max_skeleton_charges: string;
  LinkedSpecialBonus: string;
}
interface _0383 {
  var_type: string;
  skeleton_duration: string;
}
interface _0299 {
  var_type: string;
  crit_chance: string;
}
interface _0177 {
  var_type: string;
  crit_mult: string;
}
interface Miranaleap {
  AbilityCooldown: string;
  AbilityCharges: string;
  AbilityChargeRestoreTime: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial136;
}
interface AbilitySpecial136 {
  '01': _0176;
  '02': _0298;
  '03': _0382;
  '04': _0474;
  '05': _0563;
  '06': _0650;
}
interface _0650 {
  var_type: string;
  leap_bonus_duration: string;
}
interface _0563 {
  var_type: string;
  leap_speedbonus_as: string;
  LinkedSpecialBonus: string;
}
interface _0474 {
  var_type: string;
  leap_speedbonus: string;
}
interface _0382 {
  var_type: string;
  leap_acceleration: string;
}
interface _0298 {
  var_type: string;
  leap_speed: string;
}
interface _0176 {
  var_type: string;
  leap_distance: string;
}
interface Queenofpainscreamofpain {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial135;
  AbilityCastGestureSlot: string;
}
interface AbilitySpecial135 {
  '01': _0175;
  '02': _0725;
}
interface _0175 {
  var_type: string;
  area_of_effect: string;
}
interface Windrunnerwindrun {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial134;
}
interface AbilitySpecial134 {
  '01': _0174;
  '02': _0297;
  '03': _0381;
  '04': _063;
  '05': _027;
  '06': _0276;
  '07': _0364;
  '08': _0839;
}
interface _0839 {
  var_type: string;
  scepter_bonus_movement: string;
  RequiresScepter: string;
}
interface _0381 {
  var_type: string;
  enemy_movespeed_bonus_pct: string;
  LinkedSpecialBonus: string;
}
interface _0297 {
  var_type: string;
  evasion_pct_tooltip: string;
}
interface _0174 {
  var_type: string;
  movespeed_bonus_pct: string;
}
interface Broodmotherincapacitatingbite {
  AbilitySpecial: AbilitySpecial133;
}
interface AbilitySpecial133 {
  '01': _0173;
  '02': _0296;
  '03': _027;
}
interface _0296 {
  var_type: string;
  bonus_movespeed: string;
}
interface _0173 {
  var_type: string;
  miss_chance: string;
}
interface Kunkkatidebringer {
  AbilityCooldown: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilitySpecial: AbilitySpecial132;
}
interface AbilitySpecial132 {
  '01': _0172;
  '02': _0295;
  '03': _0380;
  '04': _0473;
  '05': _0562;
}
interface _0562 {
  var_type: string;
  cleave_damage: string;
  LinkedSpecialBonus: string;
}
interface _0473 {
  var_type: string;
  damage_bonus: string;
  CalculateSpellDamageTooltip: string;
}
interface _0380 {
  var_type: string;
  cleave_distance: string;
}
interface _0295 {
  var_type: string;
  cleave_ending_width: string;
}
interface _0172 {
  var_type: string;
  cleave_starting_width: string;
}
interface Terrorblademetamorphosis {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial131;
}
interface AbilitySpecial131 {
  '10': _1019;
  '11': _0137;
  '12': _128;
  '13': _133;
  '01': _027;
  '02': _0212;
  '03': _0328;
  '04': _0472;
  '05': _0561;
  '06': _0429;
  '07': _0740;
  '08': _0838;
  '09': _0929;
}
interface _0929 {
  var_type: string;
  fear_duration: string;
  RequiresScepter: string;
}
interface _0838 {
  var_type: string;
  metamorph_aura_tooltip: string;
}
interface _0740 {
  var_type: string;
  speed_loss: string;
}
interface _0561 {
  var_type: string;
  tooltip_attack_range: string;
  LinkedSpecialBonus: string;
}
interface _0472 {
  var_type: string;
  bonus_range: string;
  LinkedSpecialBonus: string;
}
interface _133 {
  var_type: string;
  scepter_spawn_delay: string;
  RequiresScepter: string;
}
interface _128 {
  var_type: string;
  scepter_speed: string;
  RequiresScepter: string;
}
interface _1019 {
  var_type: string;
  scepter_cooldown_reduction: string;
}
interface Warlockupheaval {
  AbilityCastPoint: string;
  AbilityChannelTime: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial130;
}
interface AbilitySpecial130 {
  '01': _0337;
  '02': _0294;
  '03': _027;
  '04': _0548;
}
interface _0294 {
  var_type: string;
  slow_rate_duration: string;
}
interface Lycansummonwolves {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial129;
}
interface AbilitySpecial129 {
  '01': _0171;
  '02': _0293;
  '03': _0379;
  '04': _0471;
  '05': _0560;
  '06': _0649;
  '07': _0739;
  '08': _0837;
}
interface _0837 {
  var_type: string;
  tooltip_wolf_count: string;
  LinkedSpecialBonus: string;
}
interface _0739 {
  var_type: string;
  bash_duration: string;
}
interface _0649 {
  var_type: string;
  bash_chance: string;
}
interface _0560 {
  var_type: string;
  wolf_hp: string;
}
interface _0471 {
  var_type: string;
  wolf_damage: string;
}
interface _0379 {
  var_type: string;
  wolf_bat: string;
}
interface _0293 {
  var_type: string;
  wolf_duration: string;
}
interface _0171 {
  var_type: string;
  wolf_index: string;
}
interface Zuuscloud {
  MaxLevel: string;
  IsGrantedByScepter: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial128;
}
interface AbilitySpecial128 {
  '01': _0170;
  '02': _0292;
  '03': _0378;
  '04': _0470;
  '05': _0559;
  '06': _0648;
}
interface _0648 {
  var_type: string;
  cloud_bounty_tooltip: string;
  RequiresScepter: string;
}
interface _0559 {
  var_type: string;
  creep_hits_to_kill_tooltip: string;
  RequiresScepter: string;
}
interface _0470 {
  var_type: string;
  hits_to_kill_tooltip: string;
  RequiresScepter: string;
}
interface _0378 {
  var_type: string;
  cloud_radius: string;
  RequiresScepter: string;
}
interface _0292 {
  var_type: string;
  cloud_bolt_interval: string;
  RequiresScepter: string;
}
interface _0170 {
  var_type: string;
  cloud_duration: string;
  RequiresScepter: string;
}
interface Svenwarcry {
  AbilityCastGestureSlot: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial127;
}
interface AbilitySpecial127 {
  '01': _0348;
  '02': _0312;
  '03': _0429;
  '04': _063;
  '05': _027;
}
interface Phoenixicarusdive {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial126;
}
interface AbilitySpecial126 {
  '01': _0169;
  '02': _0291;
  '03': _0377;
  '04': _072;
  '05': _0461;
  '06': _024;
  '07': _0738;
  '08': _0836;
  '09': _0928;
}
interface _0928 {
  var_type: string;
  dive_duration: string;
}
interface _0836 {
  var_type: string;
  slow_movement_speed_pct: string;
  LinkedSpecialBonus: string;
}
interface _0738 {
  var_type: string;
  burn_tick_interval: string;
}
interface _0377 {
  var_type: string;
  dash_width: string;
}
interface _0291 {
  var_type: string;
  dash_length: string;
  LinkedSpecialBonus: string;
}
interface _0169 {
  var_type: string;
  hp_cost_perc: string;
}
interface Beastmasterinnerbeast {
  AbilitySpecial: AbilitySpecial125;
}
interface AbilitySpecial125 {
  '01': _063;
  '02': _0290;
  '03': _0376;
  '04': _0469;
  '05': _0558;
  '06': _0647;
  '07': _0737;
}
interface _0737 {
  var_type: string;
  scepter_manacost: string;
}
interface _0647 {
  var_type: string;
  scepter_cooldown: string;
}
interface _0558 {
  var_type: string;
  scepter_radius: string;
}
interface _0469 {
  var_type: string;
  scepter_duration: string;
}
interface _0376 {
  var_type: string;
  scepter_multiplier: string;
}
interface _0290 {
  var_type: string;
  bonus_attack_speed: string;
  LinkedSpecialBonus: string;
}
interface Chaosknightchaosstrike {
  AbilityCooldown: string;
  AbilitySpecial: AbilitySpecial124;
}
interface AbilitySpecial124 {
  '01': _0168;
  '02': _0289;
  '03': _0280;
}
interface _0289 {
  var_type: string;
  crit_max: string;
}
interface _0168 {
  var_type: string;
  crit_min: string;
}
interface Treantleechseed {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial123;
}
interface AbilitySpecial123 {
  '01': _062;
  '02': _0288;
  '03': _0829;
  '04': _09;
  '05': _063;
  '06': _027;
  '07': _0725;
}
interface _0288 {
  var_type: string;
  leech_damage: string;
  LinkedSpecialBonus: string;
}
interface Furionwrathofnature {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial122;
}
interface AbilitySpecial122 {
  '10': _1018;
  '01': _0167;
  '02': _016;
  '03': _0375;
  '04': _0468;
  '05': _0557;
  '06': _0646;
  '07': _0720;
  '08': _0835;
  '09': _0927;
}
interface _0927 {
  var_type: string;
  treant_large_hp_bonus_tooltip: string;
  RequiresScepter: string;
}
interface _0835 {
  var_type: string;
  scepter_buffer: string;
  RequiresScepter: string;
}
interface _0646 {
  var_type: string;
  kill_damage_duration: string;
}
interface _0557 {
  var_type: string;
  kill_damage: string;
}
interface _0468 {
  var_type: string;
  jump_delay: string;
}
interface _0375 {
  var_type: string;
  damage_percent_add: string;
}
interface _0167 {
  var_type: string;
  max_targets: string;
}
interface _1018 {
  var_type: string;
  treant_large_damage_bonus_tooltip: string;
  RequiresScepter: string;
}
interface Ancientapparitionchillingtouch {
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial121;
}
interface AbilitySpecial121 {
  '01': _103;
  '02': _0517;
  '03': _027;
  '04': _0467;
}
interface _0467 {
  var_type: string;
  attack_range_bonus: string;
}
interface Crystalmaidenbrillianceaura {
  AbilityCastPoint: string;
  AbilitySpecial: AbilitySpecial120;
}
interface AbilitySpecial120 {
  '01': _0166;
  '02': _0287;
}
interface _0287 {
  var_type: string;
  self_factor: string;
}
interface _0166 {
  var_type: string;
  mana_regen: string;
}
interface Clinkzdeathpact {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial119;
}
interface AbilitySpecial119 {
  '01': _027;
  '02': _0286;
  '03': _0374;
  '04': _0466;
  '05': _0556;
  '06': _0612;
}
interface _0556 {
  var_type: string;
  debuff_duration: string;
}
interface _0466 {
  var_type: string;
  permanent_bonus: string;
}
interface _0374 {
  var_type: string;
  damage_gain: string;
}
interface _0286 {
  var_type: string;
  health_gain: string;
  LinkedSpecialBonus: string;
}
interface Sandkingburrowstrike {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityDamage: string;
  AbilitySpecial: AbilitySpecial118;
}
interface AbilitySpecial118 {
  '01': _0165;
  '02': _0285;
  '03': _0373;
  '04': _0465;
  '05': _0728;
  '06': _0645;
}
interface _0645 {
  var_type: string;
  burrow_speed_scepter: string;
  RequiresScepter: string;
}
interface _0465 {
  var_type: string;
  burrow_anim_time: string;
}
interface _0373 {
  var_type: string;
  burrow_speed: string;
}
interface _0285 {
  var_type: string;
  burrow_duration: string;
}
interface _0165 {
  var_type: string;
  burrow_width: string;
}
interface Earthshakerfissure {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial117;
}
interface AbilitySpecial117 {
  '01': _0164;
  '02': _0284;
  '03': _0372;
  '04': _092;
}
interface _0372 {
  var_type: string;
  fissure_radius: string;
}
interface _0284 {
  var_type: string;
  fissure_duration: string;
}
interface _0164 {
  var_type: string;
  fissure_range: string;
  LinkedSpecialBonus: string;
}
interface Marsarenaofblood {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial116;
}
interface AbilitySpecial116 {
  '10': _1017;
  '11': _1111;
  '01': _027;
  '02': _063;
  '03': _0636;
  '04': _0464;
  '05': _0555;
  '06': _0644;
  '07': _0736;
  '08': _0834;
  '09': _0926;
}
interface _0926 {
  var_type: string;
  first_warrior_angle: string;
}
interface _0834 {
  var_type: string;
  warrior_count: string;
}
interface _0736 {
  var_type: string;
  spear_attack_interval: string;
}
interface _0644 {
  var_type: string;
  spear_distance_from_wall: string;
}
interface _0555 {
  var_type: string;
  formation_time: string;
}
interface _0464 {
  var_type: string;
  spear_damage: string;
}
interface _1111 {
  var_type: string;
  warrior_fade_max_dist: string;
}
interface _1017 {
  var_type: string;
  warrior_fade_min_dist: string;
}
interface Grimstrokesoulchain {
  AbilityDraftUltScepterAbility: string;
  AbilityCastGestureSlot: string;
  AbilityCooldown: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial115;
}
interface AbilitySpecial115 {
  '01': _0163;
  '02': _0283;
  '03': _0371;
  '04': _0463;
  '05': _0554;
  '06': _0643;
}
interface _0643 {
  var_type: string;
  creep_duration_pct: string;
}
interface _0554 {
  var_type: string;
  leash_radius_buffer: string;
}
interface _0463 {
  var_type: string;
  leash_limit_multiplier: string;
}
interface _0371 {
  var_type: string;
  chain_break_distance: string;
}
interface _0283 {
  var_type: string;
  chain_latch_radius: string;
}
interface _0163 {
  var_type: string;
  chain_duration: string;
}
interface Monkeykingwukongscommand {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial114;
}
interface AbilitySpecial114 {
  '10': _0271;
  '11': _0728;
  '12': _127;
  '13': _064;
  '14': _143;
  '15': _152;
  '01': _0162;
  '02': _0282;
  '03': _0370;
  '04': _0462;
  '05': _0553;
  '06': _0642;
  '07': _0368;
  '08': _027;
  '09': _0925;
}
interface _0925 {
  var_type: string;
  leadership_radius_buffer: string;
}
interface _0642 {
  var_type: string;
  bonus_armor: string;
  LinkedSpecialBonus: string;
}
interface _0553 {
  var_type: string;
  move_speed: string;
}
interface _0462 {
  var_type: string;
  num_second_soldiers: string;
}
interface _0370 {
  var_type: string;
  num_first_soldiers: string;
}
interface _0282 {
  var_type: string;
  second_radius: string;
}
interface _0162 {
  var_type: string;
  first_radius: string;
}
interface _152 {
  var_type: string;
  scepter_spawn_duration: string;
  RequiresScepter: string;
}
interface _143 {
  var_type: string;
  scepter_spawn_interval: string;
  RequiresScepter: string;
}
interface _127 {
  var_type: string;
  outer_attack_buffer: string;
}
interface Arcwardentempestdouble {
  AbilityCastPoint: string;
  AbilityCastGestureSlot: string;
  AbilityCooldown: string;
  AbilitySpecial: AbilitySpecial113;
}
interface AbilitySpecial113 {
  '01': _027;
  '02': _0831;
}
interface Techieslandmines {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityCharges: string;
  AbilityChargeRestoreTime: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial112;
}
interface AbilitySpecial112 {
  '01': _063;
  '02': _0281;
  '03': _016;
  '04': _0461;
  '05': _0552;
  '06': _0525;
  '07': _0735;
  '08': _0833;
}
interface _0833 {
  var_type: string;
  AbilityChargeRestoreTime: string;
  LinkedSpecialBonus: string;
}
interface _0735 {
  var_type: string;
  cast_range_scepter_bonus: string;
  RequiresScepter: string;
}
interface _0552 {
  var_type: string;
  building_damage_pct: string;
}
interface _0461 {
  var_type: string;
  burn_duration: string;
}
interface _0281 {
  var_type: string;
  proximity_threshold: string;
}
interface Oraclefalsepromise {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial111;
}
interface AbilitySpecial111 {
  '01': _11;
  '02': _063;
}
interface Legioncommanderduel {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial110;
}
interface AbilitySpecial110 {
  '01': _027;
  '02': _0361;
  '03': _0369;
  '04': _0460;
}
interface _0460 {
  var_type: string;
  victory_range: string;
}
interface _0369 {
  var_type: string;
  reward_damage: string;
  LinkedSpecialBonus: string;
}
interface Abaddonborrowedtime {
  AbilityCastGestureSlot: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial109;
}
interface AbilitySpecial109 {
  '01': _0161;
  '02': _027;
  '03': _0361;
  '04': _0459;
  '05': _0551;
}
interface _0551 {
  var_type: string;
  redirect_range_scepter: string;
  RequiresScepter: string;
}
interface _0459 {
  var_type: string;
  ally_threshold_scepter: string;
  RequiresScepter: string;
}
interface _0161 {
  var_type: string;
  hp_threshold: string;
}
interface Skywrathmagemysticflare {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial108;
}
interface AbilitySpecial108 {
  '01': _063;
  '02': _027;
  '03': _103;
  '04': _062;
  '05': _0137;
}
interface Trollwarlordbattletrance {
  MaxLevel: string;
  AbilityCastGestureSlot: string;
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial107;
}
interface AbilitySpecial107 {
  '01': _0160;
  '02': _0280;
  '03': _0368;
  '04': _108;
  '05': _017;
  '06': _118;
  '07': _0734;
  '08': _0832;
}
interface _0832 {
  var_type: string;
  scepter_cast_range_tooltip: string;
  RequiresScepter: string;
}
interface _0734 {
  var_type: string;
  scepter_duration_enemies: string;
  RequiresScepter: string;
}
interface _0368 {
  var_type: string;
  attack_speed: string;
}
interface _0280 {
  var_type: string;
  lifesteal: string;
}
interface _0160 {
  var_type: string;
  trance_duration: string;
}
interface Wisprelocate {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial106;
}
interface AbilitySpecial106 {
  '01': _0159;
  '02': _0279;
}
interface _0279 {
  var_type: string;
  return_time: string;
}
interface _0159 {
  var_type: string;
  cast_delay: string;
}
interface Visagesummonfamiliars {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial105;
}
interface AbilitySpecial105 {
  '01': _0158;
  '02': _0278;
  '03': _0367;
  '04': _0458;
  '05': _0550;
}
interface _0550 {
  var_type: string;
  tooltip_scepter_total_familiars: string;
  LinkedSpecialBonus: string;
  RequiresScepter: string;
}
interface _0458 {
  var_type: string;
  familiar_attack_damage: string;
}
interface _0367 {
  var_type: string;
  familiar_speed: string;
  LinkedSpecialBonus: string;
}
interface _0278 {
  var_type: string;
  familiar_armor: string;
}
interface _0158 {
  var_type: string;
  familiar_hp: string;
}
interface Keeperofthelightwillowisp {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial104;
}
interface AbilitySpecial104 {
  '01': _0157;
  '02': _0219;
  '03': _0366;
  '04': _0457;
  '05': _0549;
  '06': _0641;
  '07': _0733;
  '08': _0831;
}
interface _0831 {
  var_type: string;
  bounty: string;
}
interface _0733 {
  var_type: string;
  fixed_movement_speed: string;
}
interface _0641 {
  var_type: string;
  off_duration_initial: string;
}
interface _0549 {
  var_type: string;
  on_duration: string;
}
interface _0457 {
  var_type: string;
  off_duration: string;
}
interface _0366 {
  var_type: string;
  hit_count: string;
  LinkedSpecialBonus: string;
}
interface _0157 {
  var_type: string;
  on_count: string;
  LinkedSpecialBonus: string;
}
interface Disruptorstaticstorm {
  AbilityCastGestureSlot: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial103;
}
interface AbilitySpecial103 {
  '01': _063;
  '02': _0277;
  '03': _0365;
  '04': _027;
}
interface _0365 {
  var_type: string;
  damage_max: string;
}
interface _0277 {
  var_type: string;
  pulses: string;
}
interface Rubickspellsteal {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial102;
}
interface AbilitySpecial102 {
  '01': _027;
  '02': _0725;
  '03': _0728;
  '04': _064;
}
interface Undyingfleshgolem {
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial101;
}
interface AbilitySpecial101 {
  '01': _0517;
  '02': _016;
  '03': _09;
  '04': _0456;
  '05': _027;
  '06': _0640;
  '07': _0732;
  '08': _15;
}
interface _0732 {
  var_type: string;
  zombie_radius: string;
}
interface _0640 {
  var_type: string;
  spawn_rate: string;
}
interface _0456 {
  var_type: string;
  str_percentage: string;
}
interface Shadowdemondemonicpurge {
  AbilityDuration: string;
  AbilityCooldown: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial100;
}
interface AbilitySpecial100 {
  '01': _0156;
  '02': _0276;
  '03': _0364;
  '04': _0455;
  '05': _0548;
  '06': _0639;
}
interface _0639 {
  var_type: string;
  min_slow: string;
}
interface _0548 {
  var_type: string;
  max_slow: string;
}
interface _0455 {
  var_type: string;
  charge_restore_time_tooltip_scepter: string;
  RequiresScepter: string;
}
interface _0364 {
  var_type: string;
  charge_restore_time: string;
  RequiresScepter: string;
}
interface _0276 {
  var_type: string;
  max_charges: string;
  RequiresScepter: string;
}
interface _0156 {
  var_type: string;
  purge_damage: string;
  LinkedSpecialBonus: string;
}
interface Obsidiandestroyersanityeclipse {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial99;
}
interface AbilitySpecial99 {
  '01': _0221;
  '02': _0275;
  '03': _063;
  '04': _0271;
  '05': _0547;
  '06': _0638;
  '07': _0731;
}
interface _0731 {
  var_type: string;
  counter_duration: string;
}
interface _0638 {
  var_type: string;
  stack_mana: string;
}
interface _0547 {
  var_type: string;
  damage_multiplier: string;
  LinkedSpecialBonus: string;
}
interface _0275 {
  var_type: string;
  charge_bonus_damage: string;
}
interface Silencerglobalsilence {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial98;
}
interface AbilitySpecial98 {
  '01': _0155;
}
interface _0155 {
  var_type: string;
  abilityduration: string;
  LinkedSpecialBonus: string;
}
interface Invokerinvoke {
  MaxLevel: string;
  RequiredLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial97;
}
interface AbilitySpecial97 {
  '01': _0154;
  '02': _0274;
}
interface _0274 {
  var_type: string;
  cooldown_reduction_per_orb: string;
}
interface _0154 {
  var_type: string;
  max_invoked_spells: string;
}
interface Spiritbreakernetherstrike {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCastRangeBuffer: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial96;
}
interface AbilitySpecial96 {
  '01': _016;
  '02': _0237;
}
interface Spectrehaunt {
  AbilityDraftPreAbility: string;
  AbilityDraftUltScepterAbility: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial95;
}
interface AbilitySpecial95 {
  '01': _027;
  '02': _0273;
  '03': _0363;
  '04': _0454;
  '05': _0546;
  '06': _0637;
}
interface _0637 {
  var_type: string;
  attack_delay: string;
}
interface _0546 {
  var_type: string;
  tooltip_illusion_total_damage_incoming: string;
}
interface _0454 {
  var_type: string;
  illusion_damage_incoming: string;
}
interface _0363 {
  var_type: string;
  tooltip_outgoing: string;
  LinkedSpecialBonus: string;
}
interface _0273 {
  var_type: string;
  illusion_damage_outgoing: string;
}
interface Chenhandofgod {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial94;
}
interface AbilitySpecial94 {
  '01': _0153;
  '02': _0272;
}
interface _0272 {
  var_type: string;
  ancient_creeps_scepter: string;
  RequiresScepter: string;
}
interface _0153 {
  var_type: string;
  heal_amount: string;
  LinkedSpecialBonus: string;
}
interface Jakiromacropyre {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial93;
}
interface AbilitySpecial93 {
  '01': _016;
  '02': _0271;
  '03': _0412;
  '04': _027;
  '05': _0545;
  '06': _0720;
  '07': _0728;
  '08': _0361;
  '09': _0924;
}
interface _0924 {
  var_type: string;
  linger_duration: string;
}
interface _0545 {
  var_type: string;
  burn_interval: string;
}
interface _0271 {
  var_type: string;
  cast_range: string;
}
interface Nightstalkerdarkness {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial92;
}
interface AbilitySpecial92 {
  '01': _027;
  '02': _0429;
}
interface Huskarlifebreak {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityDuration: string;
  AbilitySpecial: AbilitySpecial91;
}
interface AbilitySpecial91 {
  '01': _0152;
  '02': _0270;
  '03': _0362;
  '04': _0453;
  '05': _0544;
  '06': _0348;
  '07': _0730;
  '08': _0830;
}
interface _0830 {
  var_type: string;
  taunt_duration: string;
  RequiresScepter: string;
}
interface _0730 {
  var_type: string;
  slow_durtion_tooltip: string;
}
interface _0544 {
  var_type: string;
  tooltip_health_cost_percent: string;
  CalculateSpellDamageTooltip: string;
}
interface _0453 {
  var_type: string;
  tooltip_health_damage: string;
}
interface _0362 {
  var_type: string;
  charge_speed: string;
}
interface _0270 {
  var_type: string;
  health_damage: string;
}
interface _0152 {
  var_type: string;
  health_cost_percent: string;
}
interface Omniknightguardianangel {
  AbilityCooldown: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial90;
}
interface AbilitySpecial90 {
  '01': _027;
  '02': _063;
  '03': _0361;
  '04': _0452;
}
interface _0452 {
  var_type: string;
  scepter_regen: string;
  RequiresScepter: string;
}
interface _0361 {
  var_type: string;
  duration_scepter: string;
  RequiresScepter: string;
}
interface Darkseerwallofreplica {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial89;
}
interface AbilitySpecial89 {
  '10': _1016;
  '01': _027;
  '02': _0269;
  '03': _0360;
  '04': _0451;
  '05': _0543;
  '06': _0636;
  '07': _0729;
  '08': _0829;
  '09': _09;
}
interface _0829 {
  var_type: string;
  movement_slow: string;
}
interface _0729 {
  var_type: string;
  replica_scale: string;
}
interface _0636 {
  var_type: string;
  width: string;
}
interface _0543 {
  var_type: string;
  tooltip_replica_total_damage_incoming: string;
  CalculateSpellDamageTooltip: string;
}
interface _0451 {
  var_type: string;
  replica_damage_incoming: string;
}
interface _0360 {
  var_type: string;
  tooltip_outgoing: string;
}
interface _0269 {
  var_type: string;
  replica_damage_outgoing: string;
}
interface _1016 {
  var_type: string;
  scepter_length_multiplier: string;
  RequiresScepter: string;
}
interface Lifestealerinfest {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial88;
}
interface AbilitySpecial88 {
  '01': _063;
  '02': _016;
  '03': _0359;
  '04': _0233;
  '05': _0410;
  '06': _064;
  '07': _0728;
  '08': _0828;
}
interface _0828 {
  var_type: string;
  self_regen: string;
}
interface _0359 {
  var_type: string;
  damage_increase_pct: string;
}
interface Leshracpulsenova {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial87;
}
interface AbilitySpecial87 {
  '01': _0151;
  '02': _063;
  '03': _103;
}
interface _0151 {
  var_type: string;
  mana_cost_per_second: string;
}
interface Dazzlebadjuju {
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial86;
}
interface AbilitySpecial86 {
  '01': _0150;
  '02': _0268;
  '03': _027;
  '04': _063;
  '05': _0137;
  '06': _0635;
}
interface _0635 {
  var_type: string;
  scepter_count: string;
  RequiresScepter: string;
}
interface _0268 {
  var_type: string;
  armor_reduction: string;
  LinkedSpecialBonus: string;
}
interface _0150 {
  var_type: string;
  cooldown_reduction: string;
}
interface Viperviperstrike {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial85;
}
interface AbilitySpecial85 {
  '10': _1015;
  '01': _027;
  '02': _103;
  '03': _0233;
  '04': _0413;
  '05': _0532;
  '06': _064;
  '07': _0728;
  '08': _0725;
  '09': _0923;
}
interface _0923 {
  var_type: string;
  max_charges: string;
}
interface _0728 {
  var_type: string;
  cast_range_scepter: string;
  RequiresScepter: string;
}
interface _1015 {
  var_type: string;
  charge_restore_time: string;
}
interface Templarassassinpsionictrap {
  AbilityDraftPreAbility: string;
  AbilityDraftUltScepterAbility: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial84;
}
interface AbilitySpecial84 {
  '01': _0149;
  '02': _0267;
  '03': _0358;
  '04': _0450;
  '05': _0542;
  '06': _0634;
  '07': _0727;
}
interface _0727 {
  var_type: string;
  trap_max_charge_duration: string;
}
interface _0634 {
  var_type: string;
  trap_bonus_damage: string;
  LinkedSpecialBonus: string;
}
interface _0542 {
  var_type: string;
  trap_duration_tooltip: string;
}
interface _0450 {
  var_type: string;
  movement_speed_max: string;
}
interface _0358 {
  var_type: string;
  movement_speed_min: string;
}
interface _0267 {
  var_type: string;
  trap_fade_time: string;
}
interface _0149 {
  var_type: string;
  max_traps: string;
  LinkedSpecialBonus: string;
}
interface Pugnalifedrain {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityChannelTime: string;
  AbilityChannelAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial83;
}
interface AbilitySpecial83 {
  '01': _0148;
  '02': _0266;
  '03': _0712;
  '04': _0449;
  '05': _118;
}
interface _0449 {
  var_type: string;
  drain_buffer: string;
}
interface _0266 {
  var_type: string;
  scepter_health_drain: string;
  RequiresScepter: string;
}
interface _0148 {
  var_type: string;
  health_drain: string;
  CalculateSpellDamageTooltip: string;
}
interface Deathprophetexorcism {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial82;
}
interface AbilitySpecial82 {
  '10': _1014;
  '11': _1110;
  '12': _126;
  '13': _132;
  '14': _142;
  '15': _15;
  '01': _063;
  '02': _0265;
  '03': _0357;
  '04': _0448;
  '05': _0541;
  '06': _0633;
  '07': _0726;
  '08': _0827;
  '09': _0922;
}
interface _0922 {
  var_type: string;
  average_damage: string;
}
interface _0827 {
  var_type: string;
  heal_percent: string;
}
interface _0726 {
  var_type: string;
  max_damage: string;
}
interface _0633 {
  var_type: string;
  min_damage: string;
}
interface _0541 {
  var_type: string;
  give_up_distance: string;
}
interface _0448 {
  var_type: string;
  max_distance: string;
}
interface _0357 {
  var_type: string;
  spirit_speed: string;
}
interface _0265 {
  var_type: string;
  spirits: string;
  LinkedSpecialBonus: string;
}
interface _15 {
  var_type: string;
  movement_bonus: string;
}
interface _142 {
  var_type: string;
  scepter_spirit_bonus_damage: string;
  RequiresScepter: string;
  CalculateSpellDamageTooltip: string;
}
interface _132 {
  var_type: string;
  scepter_spirit_life_duration: string;
  RequiresScepter: string;
}
interface _126 {
  var_type: string;
  scepter_movespeed_debuff_duration: string;
  RequiresScepter: string;
}
interface _1110 {
  var_type: string;
  scepter_movespeed_slow: string;
  RequiresScepter: string;
}
interface _1014 {
  var_type: string;
  ghost_spawn_rate: string;
}
interface Facelessvoidchronosphere {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportBonus: string;
  AbilitySpecial: AbilitySpecial81;
}
interface AbilitySpecial81 {
  '01': _0219;
  '02': _027;
  '03': _089;
  '04': _0413;
}
interface Venomancerpoisonnova {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial80;
}
interface AbilitySpecial80 {
  '01': _0219;
  '02': _0264;
  '03': _11;
  '04': _016;
  '05': _064;
  '06': _0632;
  '07': _0720;
  '08': _048;
}
interface _0632 {
  var_type: string;
  duration_scepter: string;
  LinkedSpecialBonus: string;
  RequiresScepter: string;
}
interface _0264 {
  var_type: string;
  start_radius: string;
}
interface Necrolytereapersscythe {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial79;
}
interface AbilitySpecial79 {
  '01': _0147;
  '02': _092;
  '03': _0356;
}
interface _0356 {
  var_type: string;
  respawn_constant: string;
}
interface _0147 {
  var_type: string;
  damage_per_health: string;
}
interface Sniperassassinate {
  AbilityCastRange: string;
  AbilityCastRangeBuffer: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial78;
}
interface AbilitySpecial78 {
  '01': _0725;
  '02': _0263;
  '03': _0355;
  '04': _0447;
}
interface _0447 {
  var_type: string;
  scepter_cast_point: string;
  RequiresScepter: string;
}
interface _0355 {
  var_type: string;
  scepter_stun_duration: string;
  RequiresScepter: string;
}
interface _0263 {
  var_type: string;
  abilitycastpoint: string;
  LinkedSpecialBonus: string;
  LinkedSpecialBonusOperation: string;
}
interface Rikibackstab {
  AbilitySpecial: AbilitySpecial77;
}
interface AbilitySpecial77 {
  '01': _0146;
  '02': _0262;
  '03': _0135;
}
interface _0262 {
  var_type: string;
  backstab_angle: string;
}
interface _0146 {
  var_type: string;
  damage_multiplier: string;
  LinkedSpecialBonus: string;
  CalculateSpellDamageTooltip: string;
}
interface Shadowshamanmassserpentward {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial76;
}
interface AbilitySpecial76 {
  '01': _0145;
  '02': _0261;
  '03': _027;
  '04': _0626;
  '05': _0540;
  '06': _0631;
}
interface _0631 {
  var_type: string;
  hits_to_destroy_tooltip: string;
  LinkedSpecialBonus: string;
}
interface _0540 {
  var_type: string;
  spawn_radius: string;
}
interface _0261 {
  var_type: string;
  damage_tooltip: string;
  LinkedSpecialBonus: string;
  CalculateSpellDamageTooltip: string;
}
interface _0145 {
  var_type: string;
  ward_count: string;
}
interface Lichchainfrost {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial75;
}
interface AbilitySpecial75 {
  '01': _016;
  '02': _0260;
  '03': _0354;
  '04': _069;
  '05': _0539;
  '06': _09;
  '07': _0725;
  '08': _089;
  '09': _0921;
}
interface _0921 {
  var_type: string;
  bonus_jump_damage: string;
}
interface _0725 {
  var_type: string;
  projectile_speed: string;
}
interface _0539 {
  var_type: string;
  slow_attack_speed: string;
}
interface _0354 {
  var_type: string;
  jump_range: string;
}
interface _0260 {
  var_type: string;
  jumps: string;
}
interface Puckdreamcoil {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial74;
}
interface AbilitySpecial74 {
  '10': _1013;
  '01': _0144;
  '02': _0259;
  '03': _092;
  '04': _0446;
  '05': _0538;
  '06': _0630;
  '07': _0724;
  '08': _0826;
  '09': _0920;
}
interface _0920 {
  var_type: string;
  coil_break_damage_scepter: string;
  RequiresScepter: string;
}
interface _0826 {
  var_type: string;
  coil_duration_scepter: string;
  RequiresScepter: string;
}
interface _0724 {
  var_type: string;
  coil_radius: string;
}
interface _0630 {
  var_type: string;
  coil_break_damage: string;
}
interface _0538 {
  var_type: string;
  coil_stun_duration: string;
}
interface _0446 {
  var_type: string;
  coil_initial_damage: string;
}
interface _0259 {
  var_type: string;
  coil_break_radius: string;
}
interface _0144 {
  var_type: string;
  coil_duration: string;
}
interface _1013 {
  var_type: string;
  coil_stun_duration_scepter: string;
  RequiresScepter: string;
}
interface Phantomlancerjuxtapose {
  AbilitySpecial: AbilitySpecial73;
}
interface AbilitySpecial73 {
  '01': _0143;
  '02': _0258;
  '03': _0353;
  '04': _0445;
  '05': _0537;
  '06': _0629;
  '07': _0723;
  '08': _0825;
  '09': _0919;
}
interface _0919 {
  var_type: string;
  illusion_from_illusion_duration: string;
}
interface _0825 {
  var_type: string;
  tooltip_total_illusion_damage_in_pct: string;
  CalculateSpellDamageTooltip: string;
}
interface _0723 {
  var_type: string;
  illusion_damage_in_pct: string;
  CalculateSpellDamageTooltip: string;
}
interface _0629 {
  var_type: string;
  tooltip_illusion_damage: string;
  CalculateSpellDamageTooltip: string;
}
interface _0537 {
  var_type: string;
  illusion_damage_out_pct: string;
  CalculateSpellDamageTooltip: string;
}
interface _0445 {
  var_type: string;
  illusion_duration: string;
}
interface _0353 {
  var_type: string;
  illusion_proc_chance_pct: string;
}
interface _0258 {
  var_type: string;
  proc_chance_pct: string;
}
interface _0143 {
  var_type: string;
  max_illusions: string;
  LinkedSpecialBonus: string;
}
interface Bloodseekerrupture {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial72;
}
interface AbilitySpecial72 {
  '01': _027;
  '02': _0257;
  '03': _0352;
  '04': _0444;
  '05': _0536;
  '06': _0628;
}
interface _0628 {
  var_type: string;
  charge_restore_time_scepter: string;
  RequiresScepter: string;
}
interface _0536 {
  var_type: string;
  max_charges_scepter: string;
  RequiresScepter: string;
}
interface _0444 {
  var_type: string;
  abilitycastrange: string;
  LinkedSpecialBonus: string;
}
interface _0352 {
  var_type: string;
  damage_cap_amount: string;
  CalculateSpellDamageTooltip: string;
}
interface _0257 {
  var_type: string;
  movement_damage_pct: string;
  CalculateSpellDamageTooltip: string;
}
interface Axecullingblade {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial71;
}
interface AbilitySpecial71 {
  '01': _0142;
  '02': _016;
  '03': _0351;
  '04': _0443;
  '05': _0535;
  '06': _0627;
}
interface _0627 {
  var_type: string;
  speed_aoe: string;
}
interface _0535 {
  var_type: string;
  speed_duration: string;
}
interface _0443 {
  var_type: string;
  atk_speed_bonus: string;
}
interface _0351 {
  var_type: string;
  speed_bonus: string;
}
interface _0142 {
  var_type: string;
  kill_threshold: string;
}
interface Drowrangermarksmanship {
  AbilityCastRange: string;
  AbilitySpecial: AbilitySpecial70;
}
interface AbilitySpecial70 {
  '01': _0141;
  '02': _0243;
  '03': _0350;
  '04': _0442;
  '05': _0534;
  '06': _0626;
  '07': _0722;
  '08': _0824;
}
interface _0824 {
  var_type: string;
  disable_range: string;
}
interface _0722 {
  var_type: string;
  damage_reduction_scepter: string;
  RequiresScepter: string;
  CalculateSpellDamageTooltip: string;
}
interface _0626 {
  var_type: string;
  scepter_range: string;
  RequiresScepter: string;
}
interface _0534 {
  var_type: string;
  split_count_scepter: string;
  RequiresScepter: string;
}
interface _0442 {
  var_type: string;
  agility_range: string;
}
interface _0350 {
  var_type: string;
  agility_multiplier: string;
}
interface _0141 {
  var_type: string;
  chance: string;
  LinkedSpecialBonus: string;
}
interface Stormspiritballlightning {
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilityDamage: string;
  AbilitySpecial: AbilitySpecial69;
}
interface AbilitySpecial69 {
  '01': _0140;
  '02': _0256;
  '03': _0349;
  '04': _0441;
  '05': _0533;
  '06': _0625;
  '07': _0721;
  '08': _0823;
  '09': _0918;
}
interface _0918 {
  var_type: string;
  scepter_remnant_interval: string;
}
interface _0823 {
  var_type: string;
  blocker_duration: string;
}
interface _0721 {
  var_type: string;
  ball_lightning_vision_radius: string;
}
interface _0625 {
  var_type: string;
  ball_lightning_travel_cost_percent: string;
}
interface _0533 {
  var_type: string;
  ball_lightning_travel_cost_base: string;
}
interface _0441 {
  var_type: string;
  ball_lightning_aoe: string;
}
interface _0349 {
  var_type: string;
  ball_lightning_move_speed: string;
}
interface _0256 {
  var_type: string;
  ball_lightning_initial_mana_base: string;
}
interface _0140 {
  var_type: string;
  ball_lightning_initial_mana_percentage: string;
}
interface Skeletonkingreincarnation {
  AbilityManaCost: string;
  AbilityCooldown: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial68;
}
interface AbilitySpecial68 {
  '01': _0139;
  '02': _0255;
  '03': _0348;
  '04': _0440;
  '05': _09;
  '07': _0253;
  '08': _0119;
  '09': _0917;
}
interface _0917 {
  var_type: string;
  aura_radius_tooltip_scepter: string;
  RequiresScepter: string;
}
interface _0440 {
  var_type: string;
  attackslow: string;
}
interface _0348 {
  var_type: string;
  movespeed: string;
}
interface _0255 {
  var_type: string;
  slow_radius: string;
}
interface _0139 {
  var_type: string;
  reincarnate_time: string;
}
interface Banefiendsgrip {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityChannelTime: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial67;
}
interface AbilitySpecial67 {
  '01': _0138;
  '02': _0254;
  '03': _0717;
  '04': _0439;
}
interface _0439 {
  var_type: string;
  fiend_grip_damage: string;
}
interface _0254 {
  var_type: string;
  fiend_grip_mana_drain: string;
}
interface _0138 {
  var_type: string;
  fiend_grip_tick_interval: string;
}
interface Vengefulspiritnetherswap {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityCharges: string;
  AbilityChargeRestoreTime: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial66;
}
interface AbilitySpecial66 {
  '01': _0137;
  '02': _0253;
}
interface _0253 {
  var_type: string;
  scepter_duration: string;
  RequiresScepter: string;
}
interface _0137 {
  var_type: string;
  scepter_radius: string;
  RequiresScepter: string;
}
interface Witchdoctordeathward {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityChannelAnimation: string;
  AbilityCooldown: string;
  AbilityChannelTime: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial65;
}
interface AbilitySpecial65 {
  '01': _0136;
  '02': _0252;
  '03': _0347;
}
interface _0347 {
  var_type: string;
  bounce_radius: string;
  RequiresScepter: string;
}
interface _0252 {
  var_type: string;
  attack_range_tooltip: string;
  LinkedSpecialBonus: string;
}
interface _0136 {
  var_type: string;
  damage: string;
  LinkedSpecialBonus: string;
  CalculateSpellDamageTooltip: string;
}
interface Tinygrow {
  AbilitySpecial: AbilitySpecial64;
}
interface AbilitySpecial64 {
  '01': _0312;
  '02': _0243;
  '03': _0346;
}
interface _0346 {
  var_type: string;
  attack_speed_reduction: string;
}
interface Lionfingerofdeath {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial63;
}
interface AbilitySpecial63 {
  '01': _103;
  '02': _0251;
  '03': _0345;
  '04': _0438;
  '05': _0532;
  '06': _036;
  '07': _064;
  '08': _0822;
}
interface _0822 {
  var_type: string;
  splash_radius_scepter: string;
  RequiresScepter: string;
}
interface _0532 {
  var_type: string;
  mana_cost_scepter: string;
  RequiresScepter: string;
}
interface _0438 {
  var_type: string;
  grace_period: string;
}
interface _0345 {
  var_type: string;
  damage_per_kill: string;
  CalculateSpellDamageTooltip: string;
}
interface _0251 {
  var_type: string;
  damage_scepter: string;
  LinkedSpecialBonus: string;
  RequiresScepter: string;
}
interface Miranainvis {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial62;
}
interface AbilitySpecial62 {
  '01': _0135;
  '02': _027;
  '03': _0233;
}
interface _0135 {
  var_type: string;
  fade_delay: string;
}
interface Antimagemanavoid {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial61;
}
interface AbilitySpecial61 {
  '01': _0134;
  '02': _0250;
  '03': _0344;
  '04': _0437;
  '05': _0531;
}
interface _0531 {
  var_type: string;
  scepter_ministun: string;
  RequiresScepter: string;
}
interface _0437 {
  var_type: string;
  scepter_cooldown_increase: string;
  RequiresScepter: string;
}
interface _0344 {
  var_type: string;
  mana_void_aoe_radius: string;
}
interface _0250 {
  var_type: string;
  mana_void_ministun: string;
}
interface _0134 {
  var_type: string;
  mana_void_damage_per_mana: string;
}
interface Queenofpainsonicwave {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial60;
}
interface AbilitySpecial60 {
  '01': _0133;
  '02': _0249;
  '03': _0343;
  '04': _048;
  '05': _016;
  '06': _064;
  '07': _0720;
  '08': _0821;
  '09': _0916;
}
interface _0916 {
  var_type: string;
  knockback_duration: string;
}
interface _0821 {
  var_type: string;
  knockback_distance: string;
}
interface _0720 {
  var_type: string;
  damage_scepter: string;
  RequiresScepter: string;
}
interface _0343 {
  var_type: string;
  final_aoe: string;
}
interface _0249 {
  var_type: string;
  distance: string;
}
interface _0133 {
  var_type: string;
  starting_aoe: string;
}
interface Lunaeclipse {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityDuration: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial59;
}
interface AbilitySpecial59 {
  '10': _0227;
  '11': _119;
  '01': _0132;
  '02': _0248;
  '03': _0342;
  '04': _0436;
  '06': _063;
  '07': _0719;
  '08': _0820;
  '09': _0915;
}
interface _0915 {
  var_type: string;
  duration_tooltip_scepter: string;
  RequiresScepter: string;
}
interface _0820 {
  var_type: string;
  hit_count_scepter: string;
  RequiresScepter: string;
}
interface _0719 {
  var_type: string;
  beams_scepter: string;
  RequiresScepter: string;
}
interface _0436 {
  var_type: string;
  beam_interval_scepter: string;
}
interface _0342 {
  var_type: string;
  beam_interval: string;
}
interface _0248 {
  var_type: string;
  hit_count: string;
}
interface _0132 {
  var_type: string;
  beams: string;
}
interface _119 {
  var_type: string;
  night_duration: string;
}
interface Emberspiritfireremnant {
  AbilityDraftPreAbility: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityCharges: string;
  AbilityChargeRestoreTime: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial58;
}
interface AbilitySpecial58 {
  '01': _0131;
  '02': _0247;
  '03': _016;
  '04': _063;
  '05': _027;
  '06': _0624;
  '07': _0718;
  '08': _0819;
  '09': _0914;
}
interface _0914 {
  var_type: string;
  scepter_mana_cost: string;
  RequiresScepter: string;
}
interface _0819 {
  var_type: string;
  scepter_max_charges: string;
  RequiresScepter: string;
}
interface _0718 {
  var_type: string;
  scepter_speed_multiplier: string;
  RequiresScepter: string;
}
interface _0624 {
  var_type: string;
  scepter_range_multiplier: string;
  RequiresScepter: string;
}
interface _0247 {
  var_type: string;
  AbilityChargeRestoreTime: string;
  LinkedSpecialBonus: string;
  LinkedSpecialBonusOperation: string;
}
interface _0131 {
  var_type: string;
  speed_multiplier: string;
}
interface Pudgedismember {
  AbilityDraftUltScepterAbility: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityChannelAnimation: string;
  AbilityChannelTime: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial57;
}
interface AbilitySpecial57 {
  '10': _1012;
  '11': _118;
  '01': _0130;
  '02': _0246;
  '03': _0341;
  '04': _0435;
  '05': _0530;
  '06': _0326;
  '07': _0717;
  '08': _0818;
  '09': _0913;
}
interface _0913 {
  var_type: string;
  scepter_regen_pct: string;
  RequiresScepter: string;
}
interface _0818 {
  var_type: string;
  creep_dismember_duration_tooltip: string;
}
interface _0717 {
  var_type: string;
  abilitychanneltime: string;
  LinkedSpecialBonus: string;
}
interface _0530 {
  var_type: string;
  pull_distance_limit: string;
}
interface _0435 {
  var_type: string;
  pull_units_per_second: string;
}
interface _0341 {
  var_type: string;
  ticks: string;
  LinkedSpecialBonus: string;
  LinkedSpecialBonusField: string;
}
interface _0246 {
  var_type: string;
  strength_damage: string;
  LinkedSpecialBonus: string;
  LinkedSpecialBonusField: string;
  LinkedSpecialBonusOperation: string;
  CalculateSpellDamageTooltip: string;
}
interface _0130 {
  var_type: string;
  dismember_damage: string;
  LinkedSpecialBonus: string;
  LinkedSpecialBonusField: string;
  LinkedSpecialBonusOperation: string;
}
interface _118 {
  var_type: string;
  scepter_cooldown: string;
  RequiresScepter: string;
}
interface _1012 {
  var_type: string;
  order_lock_duration: string;
  RequiresScepter: string;
}
interface Phantomassassincoupdegrace {
  AbilitySpecial: AbilitySpecial56;
}
interface AbilitySpecial56 {
  '01': _0526;
  '02': _0245;
}
interface _0245 {
  var_type: string;
  crit_bonus: string;
  LinkedSpecialBonus: string;
}
interface Windrunnerfocusfire {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial55;
}
interface AbilitySpecial55 {
  '01': _0413;
  '02': _0244;
  '03': _0340;
}
interface _0340 {
  var_type: string;
  focusfire_fire_on_the_move: string;
}
interface _0244 {
  var_type: string;
  focusfire_damage_reduction: string;
  LinkedSpecialBonus: string;
}
interface Juggernautomnislash {
  AbilityDraftUltScepterAbility: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial54;
}
interface AbilitySpecial54 {
  '01': _0129;
  '02': _0243;
  '03': _11;
  '04': _0434;
}
interface _0434 {
  var_type: string;
  omni_slash_radius: string;
}
interface _0243 {
  var_type: string;
  bonus_damage: string;
  CalculateSpellDamageTooltip: string;
}
interface _0129 {
  var_type: string;
  attack_rate_multiplier: string;
}
interface Broodmotherinsatiablehunger {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial53;
}
interface AbilitySpecial53 {
  '01': _0128;
  '02': _0242;
  '03': _027;
}
interface _0242 {
  var_type: string;
  lifesteal_pct: string;
  LinkedSpecialBonus: string;
}
interface _0128 {
  var_type: string;
  bonus_damage: string;
  LinkedSpecialBonus: string;
}
interface Enchantressnaturesattendants {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial52;
}
interface AbilitySpecial52 {
  '01': _0127;
  '02': _0241;
  '03': _063;
  '04': _0433;
}
interface _0433 {
  var_type: string;
  wisp_count: string;
  LinkedSpecialBonus: string;
}
interface _0241 {
  var_type: string;
  heal: string;
  LinkedSpecialBonus: string;
}
interface _0127 {
  var_type: string;
  heal_interval: string;
}
interface Slardaramplifydamage {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial51;
}
interface AbilitySpecial51 {
  '01': _0612;
  '02': _027;
}
interface Kunkkaghostship {
  AbilityCastGestureSlot: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial50;
}
interface AbilitySpecial50 {
  '01': _0126;
  '02': _0240;
  '03': _0339;
  '04': _0432;
  '05': _0529;
  '06': _092;
  '07': _0716;
  '08': _0817;
}
interface _0817 {
  var_type: string;
  ghostship_absorb: string;
}
interface _0716 {
  var_type: string;
  ghostship_speed: string;
}
interface _0529 {
  var_type: string;
  buff_duration: string;
}
interface _0432 {
  var_type: string;
  movespeed_bonus: string;
}
interface _0339 {
  var_type: string;
  ghostship_width: string;
}
interface _0240 {
  var_type: string;
  ghostship_distance: string;
}
interface _0126 {
  var_type: string;
  tooltip_delay: string;
}
interface Terrorbladesunder {
  AbilityCooldown: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial49;
}
interface AbilitySpecial49 {
  '01': _0125;
}
interface _0125 {
  var_type: string;
  hit_point_minimum_pct: string;
}
interface Doombringerdoom {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial48;
}
interface AbilitySpecial48 {
  '01': _11;
  '02': _103;
  '03': _0338;
}
interface _0338 {
  var_type: string;
  deniable_pct: string;
}
interface Warlockrainofchaos {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial47;
}
interface AbilitySpecial47 {
  '10': _1011;
  '11': _117;
  '12': _125;
  '01': _0124;
  '02': _092;
  '03': _0337;
  '04': _0431;
  '05': _0528;
  '06': _0623;
  '07': _0715;
  '08': _0816;
  '09': _0912;
}
interface _0912 {
  var_type: string;
  golem_hp_tooltip_scepter: string;
  RequiresScepter: string;
}
interface _0816 {
  var_type: string;
  number_of_golems_scepter: string;
  RequiresScepter: string;
}
interface _0715 {
  var_type: string;
  golem_regen_tooltip: string;
}
interface _0623 {
  var_type: string;
  golem_armor_tooltip: string;
  LinkedSpecialBonus: string;
}
interface _0528 {
  var_type: string;
  golem_dmg_tooltip: string;
}
interface _0431 {
  var_type: string;
  golem_hp_tooltip: string;
}
interface _0337 {
  var_type: string;
  aoe: string;
}
interface _0124 {
  var_type: string;
  golem_duration: string;
}
interface _125 {
  var_type: string;
  bounty_reduction_scepter: string;
  RequiresScepter: string;
}
interface _117 {
  var_type: string;
  hp_dmg_reduction_scepter: string;
  RequiresScepter: string;
}
interface _1011 {
  var_type: string;
  golem_dmg_tooltip_scepter: string;
  RequiresScepter: string;
}
interface Magnataurreversepolarity {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial46;
}
interface AbilitySpecial46 {
  '01': _0330;
  '02': _0239;
  '03': _0336;
  '04': _0430;
}
interface _0430 {
  var_type: string;
  pull_duration: string;
}
interface _0336 {
  var_type: string;
  hero_stun_duration: string;
  LinkedSpecialBonus: string;
}
interface _0239 {
  var_type: string;
  polarity_damage: string;
}
interface Nyxassassinvendetta {
  AbilityDraftUltScepterAbility: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial45;
}
interface AbilitySpecial45 {
  '01': _027;
  '02': _0237;
  '03': _108;
  '04': _0429;
  '05': _0527;
  '06': _0622;
  '07': _0714;
  '08': _0815;
}
interface _0815 {
  var_type: string;
  break_duration: string;
}
interface _0714 {
  var_type: string;
  mana_regen_rate_scepter: string;
}
interface _0622 {
  var_type: string;
  health_regen_rate_scepter: string;
}
interface _0527 {
  var_type: string;
  cooldown_scepter: string;
}
interface _0429 {
  var_type: string;
  bonus_damage: string;
}
interface Lycanshapeshift {
  AbilityDraftUltScepterAbility: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial44;
}
interface AbilitySpecial44 {
  '01': _11;
  '02': _048;
  '03': _0335;
  '04': _0212;
  '05': _0526;
  '06': _0621;
}
interface _0621 {
  var_type: string;
  crit_multiplier: string;
}
interface _0526 {
  var_type: string;
  crit_chance: string;
  LinkedSpecialBonus: string;
}
interface _0335 {
  var_type: string;
  bonus_night_vision: string;
}
interface Ursaenrage {
  AbilityCastGestureSlot: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial43;
}
interface AbilitySpecial43 {
  '01': _0215;
  '02': _0238;
  '03': _11;
  '04': _064;
}
interface _0238 {
  var_type: string;
  status_resistance: string;
}
interface Slarkshadowdance {
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial42;
}
interface AbilitySpecial42 {
  '01': _11;
  '02': _0237;
  '03': _0233;
  '04': _0428;
  '05': _0525;
  '06': _0620;
}
interface _0620 {
  var_type: string;
  neutral_disable: string;
}
interface _0525 {
  var_type: string;
  activation_delay: string;
}
interface _0428 {
  var_type: string;
  bonus_regen_pct: string;
}
interface _0237 {
  var_type: string;
  fade_time: string;
}
interface Morphlingreplicate {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial41;
}
interface AbilitySpecial41 {
  '01': _11;
  '02': _0236;
  '03': _0334;
}
interface _0334 {
  var_type: string;
  scepter_cast_range_bonus: string;
  RequiresScepter: string;
}
interface _0236 {
  var_type: string;
  scepter_manacost_reduction: string;
}
interface Zuusthundergodswrath {
  AbilityDraftUltScepterAbility: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial40;
}
interface AbilitySpecial40 {
  '01': _0123;
  '02': _0235;
  '03': _0333;
  '04': _016;
}
interface _0333 {
  var_type: string;
  sight_duration: string;
}
interface _0235 {
  var_type: string;
  sight_radius_night: string;
}
interface _0123 {
  var_type: string;
  sight_radius_day: string;
}
interface Svengodsstrength {
  AbilityCastGestureSlot: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial39;
}
interface AbilitySpecial39 {
  '01': _0122;
  '02': _0234;
}
interface _0234 {
  var_type: string;
  gods_strength_bonus_str: string;
  LinkedSpecialBonus: string;
}
interface _0122 {
  var_type: string;
  gods_strength_damage: string;
}
interface Dragonknightelderdragonform {
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial38;
}
interface AbilitySpecial38 {
  '10': _1010;
  '11': _116;
  '12': _124;
  '13': _098;
  '14': _14;
  '01': _027;
  '02': _0233;
  '03': _0332;
  '04': _0427;
  '05': _0524;
  '06': _0619;
  '07': _0713;
  '08': _0814;
  '09': _0911;
}
interface _0911 {
  var_type: string;
  frost_bonus_movement_speed: string;
  LinkedSpecialBonus: string;
}
interface _0814 {
  var_type: string;
  splash_damage_percent: string;
  LinkedSpecialBonus: string;
}
interface _0713 {
  var_type: string;
  splash_radius: string;
}
interface _0619 {
  var_type: string;
  corrosive_breath_duration: string;
}
interface _0524 {
  var_type: string;
  corrosive_breath_damage: string;
}
interface _0427 {
  var_type: string;
  bonus_attack_damage: string;
}
interface _0332 {
  var_type: string;
  bonus_attack_range: string;
}
interface _0233 {
  var_type: string;
  bonus_movement_speed: string;
}
interface _14 {
  var_type: string;
  model_scale: string;
}
interface _124 {
  var_type: string;
  frost_aoe: string;
}
interface _116 {
  var_type: string;
  frost_duration: string;
}
interface _1010 {
  var_type: string;
  frost_bonus_attack_speed: string;
  LinkedSpecialBonus: string;
}
interface Meepodividedwestand {
  DisplayAdditionalHeroes: string;
  LevelsBetweenUpgrades: string;
  RequiredLevel: string;
  AbilitySpecial: AbilitySpecial37;
}
interface AbilitySpecial37 {
  '01': _0121;
  '02': _0232;
  '03': _0331;
  '04': _0426;
  '05': _0523;
  '06': _0618;
}
interface _0618 {
  var_type: string;
  tooltip_scepter_bonus_meepo: string;
  RequiresScepter: string;
}
interface _0523 {
  var_type: string;
  tooltip_respawn: string;
}
interface _0426 {
  var_type: string;
  respawn: string;
}
interface _0331 {
  var_type: string;
  tooltip_share_percentage_scepter: string;
}
interface _0232 {
  var_type: string;
  tooltip_share_percentage: string;
}
interface _0121 {
  var_type: string;
  tooltip_clones: string;
}
interface Enigmablackhole {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityChannelTime: string;
  AbilityChannelAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial36;
}
interface AbilitySpecial36 {
  '10': _109;
  '11': _0326;
  '01': _0120;
  '02': _0231;
  '03': _0330;
  '04': _0425;
  '05': _0522;
  '06': _0617;
  '07': _0712;
  '08': _027;
  '09': _089;
}
interface _0712 {
  var_type: string;
  tick_rate: string;
}
interface _0617 {
  var_type: string;
  near_damage: string;
}
interface _0522 {
  var_type: string;
  near_radius: string;
}
interface _0425 {
  var_type: string;
  pull_speed: string;
}
interface _0330 {
  var_type: string;
  pull_radius: string;
}
interface _0231 {
  var_type: string;
  far_radius: string;
}
interface _0120 {
  var_type: string;
  far_damage: string;
}
interface _109 {
  var_type: string;
  pull_rotate_speed: string;
}
interface Phoenixsupernova {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial35;
}
interface AbilitySpecial35 {
  '01': _0119;
  '02': _0230;
  '03': _0329;
  '04': _0424;
  '05': _0521;
  '07': _0227;
}
interface _0521 {
  var_type: string;
  max_hero_attacks_scepter: string;
  LinkedSpecialBonus: string;
  RequiresScepter: string;
}
interface _0424 {
  var_type: string;
  max_hero_attacks: string;
  LinkedSpecialBonus: string;
}
interface _0329 {
  var_type: string;
  stun_duration: string;
  LinkedSpecialBonus: string;
}
interface _0230 {
  var_type: string;
  damage_per_sec: string;
}
interface _0119 {
  var_type: string;
  aura_radius: string;
}
interface Abyssalunderlorddarkrift {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial34;
}
interface AbilitySpecial34 {
  '01': _063;
  '02': _0229;
}
interface _0229 {
  var_type: string;
  teleport_delay: string;
}
interface Lonedruidtrueform {
  AbilityCooldown: string;
  AbilityCastGestureSlot: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial33;
}
interface AbilitySpecial33 {
  '01': _0312;
  '02': _0228;
  '03': _0328;
  '05': _027;
  '06': _0212;
}
interface _0328 {
  var_type: string;
  base_attack_time: string;
}
interface _0228 {
  var_type: string;
  bonus_hp: string;
  LinkedSpecialBonus: string;
}
interface Weavertimelapse {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial32;
}
interface AbilitySpecial32 {
  '01': _064;
  '02': _0227;
}
interface _0227 {
  var_type: string;
  cast_range_tooltip_scepter: string;
  RequiresScepter: string;
}
interface Beastmasterprimalroar {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityCastRange: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial31;
}
interface AbilitySpecial31 {
  '10': _108;
  '11': _115;
  '01': _027;
  '02': _016;
  '03': _0327;
  '04': _0423;
  '05': _0520;
  '06': _0616;
  '07': _0711;
  '08': _0813;
  '09': _09;
}
interface _0813 {
  var_type: string;
  push_duration: string;
}
interface _0711 {
  var_type: string;
  push_distance: string;
}
interface _0616 {
  var_type: string;
  slow_attack_speed_pct: string;
}
interface _0520 {
  var_type: string;
  slow_movement_speed_pct: string;
}
interface _0423 {
  var_type: string;
  damage_radius: string;
}
interface _0327 {
  var_type: string;
  side_damage: string;
}
interface _115 {
  var_type: string;
  movement_speed_duration: string;
}
interface _108 {
  var_type: string;
  movement_speed: string;
}
interface Medusastonegaze {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial30;
}
interface AbilitySpecial30 {
  '01': _063;
  '02': _11;
  '03': _0517;
  '04': _0422;
  '05': _0519;
  '06': _0615;
  '07': _0710;
  '08': _0812;
}
interface _0812 {
  var_type: string;
  speed_boost: string;
}
interface _0710 {
  var_type: string;
  bonus_physical_damage: string;
}
interface _0615 {
  var_type: string;
  vision_cone: string;
}
interface _0519 {
  var_type: string;
  face_duration: string;
}
interface _0422 {
  var_type: string;
  stone_duration: string;
}
interface Nagasirensongofthesiren {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial29;
}
interface AbilitySpecial29 {
  '01': _063;
  '02': _027;
  '03': _0326;
  '04': _0421;
  '05': _0518;
  '06': _0614;
}
interface _0614 {
  var_type: string;
  regen_rate_tooltip_scepter: string;
  RequiresScepter: string;
}
interface _0518 {
  var_type: string;
  regen_rate_self: string;
}
interface _0421 {
  var_type: string;
  regen_rate: string;
}
interface _0326 {
  var_type: string;
  animation_rate: string;
}
interface Tidehunterravage {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial28;
}
interface AbilitySpecial28 {
  '01': _063;
  '02': _048;
  '03': _027;
}
interface Shredderchakram {
  AbilityDraftUltScepterAbility: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial27;
}
interface AbilitySpecial27 {
  '10': _107;
  '01': _048;
  '02': _063;
  '03': _0325;
  '04': _024;
  '05': _0517;
  '06': _062;
  '07': _038;
  '08': _0811;
  '09': _0910;
}
interface _0910 {
  var_type: string;
  pass_slow_duration: string;
}
interface _0811 {
  var_type: string;
  mana_per_second: string;
}
interface _0517 {
  var_type: string;
  slow: string;
}
interface _0325 {
  var_type: string;
  pass_damage: string;
}
interface _107 {
  var_type: string;
  slow_health_percentage: string;
}
interface Gyrocoptercalldown {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial26;
}
interface AbilitySpecial26 {
  '10': _106;
  '01': _0118;
  '02': _0226;
  '03': _0324;
  '04': _0420;
  '05': _0516;
  '06': _0613;
  '07': _063;
  '08': _0810;
  '09': _099;
}
interface _099 {
  var_type: string;
  damage_second_scepter: string;
}
interface _0810 {
  var_type: string;
  range_scepter: string;
}
interface _0613 {
  var_type: string;
  slow_second: string;
}
interface _0516 {
  var_type: string;
  slow_first: string;
}
interface _0420 {
  var_type: string;
  damage_second: string;
}
interface _0324 {
  var_type: string;
  damage_first: string;
}
interface _0226 {
  var_type: string;
  slow_duration_second: string;
}
interface _0118 {
  var_type: string;
  slow_duration_first: string;
}
interface _106 {
  var_type: string;
  missile_delay_tooltip: string;
}
interface Razoreyeofthestorm {
  AbilityCastGestureSlot: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial25;
}
interface AbilitySpecial25 {
  '01': _063;
  '02': _0225;
  '03': _0323;
  '04': _027;
  '05': _0515;
  '06': _0612;
  '07': _016;
}
interface _0612 {
  var_type: string;
  armor_reduction: string;
}
interface _0515 {
  var_type: string;
  strike_interval: string;
  LinkedSpecialBonus: string;
}
interface _0323 {
  var_type: string;
  passive_area_interval: string;
}
interface _0225 {
  var_type: string;
  passive_area_damage: string;
  LinkedSpecialBonus: string;
}
interface Chaosknightphantasm {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial24;
}
interface AbilitySpecial24 {
  '01': _0117;
  '02': _0224;
  '03': _0322;
  '04': _0419;
  '05': _0514;
  '06': _0611;
  '07': _079;
  '08': _089;
  '09': _098;
}
interface _098 {
  var_type: string;
  magic_resistance: string;
}
interface _089 {
  var_type: string;
  vision_radius: string;
}
interface _079 {
  var_type: string;
  invuln_duration: string;
}
interface _0611 {
  var_type: string;
  incoming_damage_tooltip: string;
}
interface _0514 {
  var_type: string;
  incoming_damage: string;
}
interface _0419 {
  var_type: string;
  outgoing_damage_tooltip: string;
}
interface _0322 {
  var_type: string;
  outgoing_damage: string;
}
interface _0224 {
  var_type: string;
  illusion_duration: string;
  LinkedSpecialBonus: string;
}
interface _0117 {
  var_type: string;
  images_count: string;
}
interface Nevermorerequiem {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityDamage: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial23;
}
interface AbilitySpecial23 {
  '10': _105;
  '11': _114;
  '12': _123;
  '01': _0116;
  '02': _0223;
  '03': _0321;
  '04': _0418;
  '05': _0513;
  '06': _0610;
  '07': _078;
  '08': _088;
  '09': _097;
}
interface _097 {
  var_type: string;
  requiem_line_speed: string;
}
interface _088 {
  var_type: string;
  requiem_line_width_end: string;
}
interface _078 {
  var_type: string;
  requiem_line_width_start: string;
}
interface _0610 {
  var_type: string;
  requiem_soul_conversion: string;
}
interface _0513 {
  var_type: string;
  requiem_reduction_radius: string;
}
interface _0418 {
  var_type: string;
  requiem_slow_duration_max: string;
}
interface _0321 {
  var_type: string;
  requiem_slow_duration: string;
}
interface _0223 {
  var_type: string;
  requiem_reduction_ms: string;
}
interface _0116 {
  var_type: string;
  requiem_radius: string;
}
interface _123 {
  var_type: string;
  requiem_damage_pct_scepter: string;
  RequiresScepter: string;
  CalculateSpellDamageTooltip: string;
}
interface _114 {
  var_type: string;
  requiem_heal_pct_scepter: string;
  RequiresScepter: string;
}
interface _105 {
  var_type: string;
  soul_death_release: string;
}
interface Eldertitanearthsplitter {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial22;
}
interface AbilitySpecial22 {
  '10': _104;
  '11': _113;
  '12': _122;
  '13': _13;
  '01': _0115;
  '02': _0222;
  '03': _0320;
  '04': _0417;
  '05': _09;
  '06': _048;
  '07': _077;
  '08': _087;
  '09': _096;
}
interface _096 {
  var_type: string;
  vision_interval: string;
}
interface _087 {
  var_type: string;
  vision_width: string;
}
interface _077 {
  var_type: string;
  damage_pct: string;
}
interface _0417 {
  var_type: string;
  slow_pct: string;
}
interface _0320 {
  var_type: string;
  crack_distance: string;
}
interface _0222 {
  var_type: string;
  crack_width: string;
}
interface _0115 {
  var_type: string;
  crack_time: string;
}
interface _13 {
  var_type: string;
  slow_duration_scepter: string;
}
interface _122 {
  var_type: string;
  total_steps: string;
}
interface _113 {
  var_type: string;
  vision_step: string;
}
interface _104 {
  var_type: string;
  vision_duration: string;
}
interface Centaurstampede {
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial21;
}
interface AbilitySpecial21 {
  '01': _027;
  '02': _0221;
  '03': _0319;
  '04': _09;
  '05': _063;
  '06': _069;
  '07': _076;
  '08': _086;
}
interface _086 {
  var_type: string;
  damage_reduction_tooltip_scepter: string;
  RequiresScepter: string;
}
interface _076 {
  var_type: string;
  damage_reduction: string;
  RequiresScepter: string;
}
interface _069 {
  var_type: string;
  slow_movement_speed: string;
}
interface _0319 {
  var_type: string;
  strength_damage: string;
  CalculateSpellDamageTooltip: string;
}
interface _0221 {
  var_type: string;
  base_damage: string;
}
interface Brewmasterprimalsplit {
  AbilityCooldown: string;
  AbilityCastPoint: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial20;
}
interface AbilitySpecial20 {
  '01': _027;
  '02': _0220;
  '03': _0318;
}
interface _0318 {
  var_type: string;
  scepter_movementspeed: string;
  RequiresScepter: string;
}
interface _0220 {
  var_type: string;
  split_duration: string;
}
interface Treantovergrowth {
  AbilityCastPoint: string;
  AbilityDraftUltScepterAbility: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial19;
}
interface AbilitySpecial19 {
  '01': _027;
  '02': _0219;
  '03': _0317;
  '04': _103;
}
interface _0317 {
  var_type: string;
  eyes_radius: string;
  LinkedSpecialBonus: string;
}
interface _0219 {
  var_type: string;
  radius: string;
  LinkedSpecialBonus: string;
}
interface Darkwillowterrorize {
  LinkedAbility: string;
  AbilityDraftPreAbility: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial18;
}
interface AbilitySpecial18 {
  '01': _0114;
  '02': _0218;
  '03': _0316;
  '04': _0416;
  '05': _0512;
}
interface _0512 {
  var_type: string;
  starting_height: string;
}
interface _0416 {
  var_type: string;
  return_travel_speed: string;
}
interface _0316 {
  var_type: string;
  destination_status_duration: string;
  LinkedSpecialBonus: string;
}
interface _0218 {
  var_type: string;
  destination_radius: string;
}
interface _0114 {
  var_type: string;
  destination_travel_speed: string;
}
interface Bristlebackwarpath {
  AbilityDuration: string;
  AbilitySpecial: AbilitySpecial17;
}
interface AbilitySpecial17 {
  '01': _0113;
  '02': _0217;
  '03': _0315;
  '04': _0415;
}
interface _0415 {
  var_type: string;
  max_stacks: string;
}
interface _0315 {
  var_type: string;
  stack_duration: string;
}
interface _0217 {
  var_type: string;
  move_speed_per_stack: string;
}
interface _0113 {
  var_type: string;
  damage_per_stack: string;
  LinkedSpecialBonus: string;
}
interface Furionteleportation {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
}
interface Tuskwalruspunch {
  AbilityDraftUltScepterAbility: string;
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial16;
}
interface AbilitySpecial16 {
  '01': _0112;
  '02': _0216;
  '03': _09;
  '04': _0414;
  '05': _0511;
}
interface _0511 {
  var_type: string;
  push_length: string;
}
interface _0414 {
  var_type: string;
  move_slow: string;
}
interface _0216 {
  var_type: string;
  air_time: string;
  LinkedSpecialBonus: string;
}
interface _0112 {
  var_type: string;
  crit_multiplier: string;
  LinkedSpecialBonus: string;
}
interface Winterwyvernwinterscurse {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial15;
}
interface AbilitySpecial15 {
  '01': _063;
  '02': _0215;
  '03': _0314;
  '04': _0413;
  '05': _11;
}
interface _0413 {
  var_type: string;
  bonus_attack_speed: string;
}
interface _0314 {
  var_type: string;
  damage_amplification: string;
}
interface _0215 {
  var_type: string;
  damage_reduction: string;
}
interface Ancientapparitioniceblast {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityDamage: string;
  AbilitySpecial: AbilitySpecial14;
}
interface AbilitySpecial14 {
  '01': _0111;
  '02': _0214;
  '03': _0313;
  '04': _0412;
  '05': _0510;
  '06': _068;
  '07': _048;
  '08': _085;
  '09': _095;
}
interface _095 {
  var_type: string;
  target_sight_radius: string;
}
interface _085 {
  var_type: string;
  kill_pct: string;
  LinkedSpecialBonus: string;
}
interface _068 {
  var_type: string;
  dot_damage: string;
}
interface _0510 {
  var_type: string;
  frostbite_duration: string;
}
interface _0412 {
  var_type: string;
  path_radius: string;
}
interface _0313 {
  var_type: string;
  radius_max: string;
}
interface _0214 {
  var_type: string;
  radius_grow: string;
}
interface _0111 {
  var_type: string;
  radius_min: string;
}
interface Crystalmaidenfreezingfield {
  AbilityChannelTime: string;
  AbilityCastPoint: string;
  AbilityChannelAnimation: string;
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial13;
}
interface AbilitySpecial13 {
  '10': _103;
  '11': _112;
  '01': _063;
  '02': _0213;
  '03': _0312;
  '04': _0411;
  '05': _059;
  '06': _067;
  '07': _09;
  '08': _084;
  '09': _094;
}
interface _094 {
  var_type: string;
  explosion_max_dist: string;
}
interface _084 {
  var_type: string;
  explosion_min_dist: string;
}
interface _067 {
  var_type: string;
  attack_slow: string;
}
interface _059 {
  var_type: string;
  movespeed_slow: string;
}
interface _0411 {
  var_type: string;
  explosion_interval: string;
}
interface _0312 {
  var_type: string;
  bonus_armor: string;
}
interface _0213 {
  var_type: string;
  explosion_radius: string;
}
interface _112 {
  var_type: string;
  scepter_delay: string;
  RequiresScepter: string;
}
interface _103 {
  var_type: string;
  damage: string;
  LinkedSpecialBonus: string;
}
interface Alchemistchemicalrage {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial12;
}
interface AbilitySpecial12 {
  '10': _102;
  '01': _027;
  '02': _0212;
  '03': _0311;
  '04': _0410;
  '05': _058;
  '06': _066;
  '07': _075;
  '08': _083;
  '09': _093;
}
interface _093 {
  var_type: string;
  scepter_bonus_damage: string;
  RequiresScepter: string;
}
interface _083 {
  var_type: string;
  scepter_gold_damage: string;
  RequiresScepter: string;
}
interface _075 {
  var_type: string;
  bonus_movespeed: string;
  LinkedSpecialBonus: string;
}
interface _066 {
  var_type: string;
  bonus_mana_regen: string;
}
interface _058 {
  var_type: string;
  bonus_health_regen: string;
  LinkedSpecialBonus: string;
}
interface _0410 {
  var_type: string;
  bonus_health: string;
}
interface _0311 {
  var_type: string;
  base_attack_time: string;
  LinkedSpecialBonus: string;
}
interface _0212 {
  var_type: string;
  transformation_time: string;
}
interface _102 {
  var_type: string;
  scepter_spell_amp: string;
  RequiresScepter: string;
}
interface Bountyhuntertrack {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial11;
}
interface AbilitySpecial11 {
  '01': _0110;
  '02': _0211;
  '03': _0310;
  '04': _049;
  '05': _027;
  '06': _065;
  '07': _074;
}
interface _074 {
  var_type: string;
  bonus_move_speed_pct: string;
}
interface _065 {
  var_type: string;
  gold_steal: string;
}
interface _049 {
  var_type: string;
  bonus_gold: string;
  LinkedSpecialBonus: string;
}
interface _0310 {
  var_type: string;
  bonus_gold_self: string;
  LinkedSpecialBonus: string;
}
interface _0211 {
  var_type: string;
  bonus_gold_radius: string;
}
interface _0110 {
  var_type: string;
  target_crit_multiplier: string;
}
interface Rattletraphookshot {
  AbilityDraftUltScepterAbility: string;
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial10;
}
interface AbilitySpecial10 {
  '01': _019;
  '02': _0210;
  '03': _027;
  '04': _048;
  '05': _016;
  '06': _064;
}
interface _064 {
  var_type: string;
  cooldown_scepter: string;
  RequiresScepter: string;
}
interface _048 {
  var_type: string;
  speed: string;
}
interface _0210 {
  var_type: string;
  stun_radius: string;
}
interface _019 {
  var_type: string;
  latch_radius: string;
}
interface Tinkerrearm {
  AbilityCastPoint: string;
  AbilityChannelTime: string;
  AbilityChannelAnimation: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: DOTAAbilities;
}
interface Ogremagimulticast {
  AbilitySpecial: AbilitySpecial9;
}
interface AbilitySpecial9 {
  '01': _018;
  '02': _029;
  '03': _039;
}
interface _039 {
  var_type: string;
  multicast_4_times: string;
}
interface _029 {
  var_type: string;
  multicast_3_times: string;
}
interface _018 {
  var_type: string;
  multicast_2_times: string;
}
interface Batriderflaminglasso {
  AbilityCastPoint: string;
  AbilityCastRange: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial8;
}
interface AbilitySpecial8 {
  '01': _027;
  '02': _028;
  '03': _038;
  '04': _047;
  '05': _057;
  '06': _016;
}
interface _057 {
  var_type: string;
  grab_radius_scepter: string;
  RequiresScepter: string;
}
interface _047 {
  var_type: string;
  grab_radius: string;
}
interface _038 {
  var_type: string;
  break_distance: string;
}
interface _028 {
  var_type: string;
  drag_distance: string;
}
interface Clinkzburningarmy {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial7;
}
interface AbilitySpecial7 {
  '01': _017;
  '02': _027;
  '03': _037;
  '04': _046;
  '05': _056;
  '07': _073;
}
interface _073 {
  var_type: string;
  spawn_interval: string;
}
interface _056 {
  var_type: string;
  damage_percent: string;
}
interface _046 {
  var_type: string;
  attack_rate: string;
}
interface _037 {
  var_type: string;
  count: string;
}
interface _027 {
  var_type: string;
  duration: string;
}
interface _017 {
  var_type: string;
  range: string;
}
interface Linalagunablade {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial6;
}
interface AbilitySpecial6 {
  '01': _016;
  '02': _026;
  '03': _036;
}
interface _036 {
  var_type: string;
  damage_delay: string;
  CalculateSpellDamageTooltip: string;
}
interface _026 {
  var_type: string;
  cast_range_scepter: string;
}
interface _016 {
  var_type: string;
  damage: string;
}
interface Pangoliergyroshell {
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityDamage: string;
  precache: Precache;
  AbilitySpecial: AbilitySpecial5;
}
interface AbilitySpecial5 {
  '10': _10;
  '11': _11;
  '12': _12;
  '01': _015;
  '02': _025;
  '03': _035;
  '04': _045;
  '05': _055;
  '06': _063;
  '07': _072;
  '08': _082;
  '09': _092;
}
interface _092 {
  var_type: string;
  stun_duration: string;
}
interface _082 {
  var_type: string;
  bounce_duration: string;
}
interface _072 {
  var_type: string;
  hit_radius: string;
}
interface _063 {
  var_type: string;
  radius: string;
}
interface _055 {
  var_type: string;
  turn_rate: string;
}
interface _045 {
  var_type: string;
  turn_rate_boosted: string;
}
interface _035 {
  var_type: string;
  forward_move_speed: string;
}
interface _025 {
  var_type: string;
  tick_interval: string;
}
interface _015 {
  var_type: string;
  cast_time_tooltip: string;
}
interface _12 {
  var_type: string;
  jump_recover_time: string;
}
interface _11 {
  var_type: string;
  duration: string;
  LinkedSpecialBonus: string;
}
interface _10 {
  var_type: string;
  knockback_radius: string;
}
interface Precache {
  model: string;
}
interface Earthspiritmagnetize {
  AbilityDraftPreAbility: string;
  AbilityDraftUltScepterAbility: string;
  AbilityCastGestureSlot: string;
  AbilityCastRange: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial4;
}
interface AbilitySpecial4 {
  '01': _014;
  '02': _024;
  '03': _034;
  '04': _044;
  '05': _054;
  '06': _062;
  '07': _07;
  '08': _08;
  '09': _09;
}
interface _09 {
  var_type: string;
  slow_duration: string;
}
interface _08 {
  var_type: string;
  silence_duration: string;
}
interface _07 {
  var_type: string;
  rock_explosion_delay: string;
}
interface _062 {
  var_type: string;
  damage_interval: string;
}
interface _054 {
  var_type: string;
  rock_explosion_radius: string;
}
interface _044 {
  var_type: string;
  rock_search_radius: string;
}
interface _034 {
  var_type: string;
  damage_duration: string;
}
interface _024 {
  var_type: string;
  damage_per_second: string;
}
interface _014 {
  var_type: string;
  cast_radius: string;
}
interface Sandkingepicenter {
  AbilityCooldown: string;
  AbilityDuration: string;
  AbilityChannelTime: string;
  AbilityCastPoint: string;
  AbilityChannelAnimation: string;
  AbilityManaCost: string;
  AbilityModifierSupportValue: string;
  AbilitySpecial: AbilitySpecial3;
}
interface AbilitySpecial3 {
  '01': _013;
  '02': _023;
  '03': _033;
  '04': _043;
  '05': _053;
}
interface _053 {
  var_type: string;
  epicenter_slow_as: string;
  LinkedSpecialBonus: string;
}
interface _043 {
  var_type: string;
  epicenter_slow: string;
}
interface _033 {
  var_type: string;
  epicenter_damage: string;
  LinkedSpecialBonus: string;
}
interface _023 {
  var_type: string;
  epicenter_pulses: string;
  LinkedSpecialBonus: string;
}
interface _013 {
  var_type: string;
  epicenter_radius: string;
}
interface Earthshakerechoslam {
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial2;
}
interface AbilitySpecial2 {
  '01': _012;
  '02': _022;
  '03': _032;
  '04': _042;
  '05': _052;
}
interface _052 {
  var_type: string;
  echo_slam_initial_damage: string;
}
interface _042 {
  var_type: string;
  echo_slam_echo_damage: string;
  LinkedSpecialBonus: string;
}
interface _032 {
  var_type: string;
  echo_slam_echo_range: string;
}
interface _022 {
  var_type: string;
  echo_slam_echo_search_range: string;
}
interface _012 {
  var_type: string;
  echo_slam_damage_range: string;
  CalculateSpellDamageTooltip: string;
}
interface Abilitiescommon {
  tka_exp: Tkaexp;
  tka_random: Tkarandom;
  tka_remove: Tkaremove;
  tka_fast_recall: Tkaremove;
  tka_drop_item: Tkaremove;
  tka_chess_talent_item_checker: Tkachesstalentitemchecker;
}
interface Tkachesstalentitemchecker {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface Tkaremove {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  AbilityUnitTargetType: string;
  AbilityUnitTargetTeam: string;
  AbilityUnitTargetFlags: string;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
}
interface Tkarandom {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  MaxLevel: string;
  LevelsBetweenUpgrades: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilitySpecial: AbilitySpecial;
}
interface AbilitySpecial {
  '01': _01;
  '02': _02;
  '03': _03;
  '04': _04;
  '05': _05;
  '06': _06;
}
interface _06 {
  var_type: string;
  money: string;
}
interface _05 {
  var_type: string;
  per_cost_5: string;
}
interface _04 {
  var_type: string;
  per_cost_4: string;
}
interface _03 {
  var_type: string;
  per_cost_3: string;
}
interface _02 {
  var_type: string;
  per_cost_2: string;
}
interface _01 {
  var_type: string;
  per_cost_1: string;
}
interface Tkaexp {
  BaseClass: string;
  ScriptFile: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
  MaxLevel: string;
  AbilityCastPoint: string;
  AbilityCooldown: string;
}
interface Zhujiang {
  cai_wen_ji: Caiwenji;
  cao_cao: Caiwenji;
  cao_hong: Caiwenji;
  cao_pi: Caiwenji;
  cao_ren: Caiwenji;
  chen_gong: Caiwenji;
  dian_wei: Caiwenji;
  diao_chan: Caiwenji;
  dong_zhuo: Caiwenji;
  fa_zheng: Caiwenji;
  gan_ning: Caiwenji;
  gao_shun: Caiwenji;
  guan_yu: Caiwenji;
  guo_jia: Caiwenji;
  huang_gai: Caiwenji;
  huang_yue_ying: Caiwenji;
  huang_zhong: Caiwenji;
  hua_tuo: Caiwenji;
  liu_bei: Caiwenji;
  liu_biao: Caiwenji;
  liu_shan: Caiwenji;
  lu_su: Caiwenji;
  lu_xun: Caiwenji;
  lv_bu: Caiwenji;
  lv_meng: Caiwenji;
  ma_chao: Caiwenji;
  ma_dai: Caiwenji;
  pang_tong: Caiwenji;
  si_ma_yi: Caiwenji;
  sun_ce: Caiwenji;
  sun_jian: Caiwenji;
  sun_quan: Caiwenji;
  sun_shang_xiang: Caiwenji;
  tai_shi_ci: Caiwenji;
  xia_hou_yuan: Caiwenji;
  xu_huang: Caiwenji;
  xun_yu: Caiwenji;
  yuan_shu: Caiwenji;
  yue_jin: Caiwenji;
  yu_jin: Caiwenji;
  zhang_fei: Caiwenji;
  zhang_he: Caiwenji;
  zhang_jiao: Caiwenji;
  zhang_liao: Caiwenji;
  zhao_yun: Caiwenji;
  zhou_tai: Caiwenji;
  zhou_yu: Caiwenji;
  zhu_ge_liang: Caiwenji;
}
interface Caiwenji {
  Model: string;
  ModelScale: string;
}
interface Winningparticles {
  wg_601: Wg601;
  wg_602: Wg601;
}
interface Wg601 {
  name: string;
  level: string;
  type: string;
}
interface Vicarious {
  mu_niu_liu_ma_1: Muniuliuma1;
  mu_niu_liu_ma_2: Muniuliuma1;
  mu_niu_liu_ma_3: Muniuliuma1;
  yao_kong_zha_dan: Yaokongzhadan;
  xian_zhi_treant: Xianzhitreant;
  tai_ping_qing_ling_dao_jin_zhan: Taipingqinglingdaojinzhan;
  tai_ping_qing_ling_dao_yuan_cheng: Taipingqinglingdaoyuancheng;
  huang_jin_jun: Xianzhitreant;
  ju_xiang: Xianzhitreant;
  ju_xiang2: Xianzhitreant;
  dong_wu_gong_bing: Dongwugongbing;
  huang_ji_nan_shao: Huangjinanshao;
}
interface Huangjinanshao {
  BaseClass: string;
  Model: string;
  SoundSet: string;
  Level: string;
  ModelScale: string;
  IsSummoned: string;
  CanBeDominated: string;
  UnitLabel: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  AttackCapabilities: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackDamageType: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  BoundsHullName: string;
  HealthBarOffset: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  vscripts: string;
}
interface Dongwugongbing {
  BaseClass: string;
  Model: string;
  SoundSet: string;
  Level: string;
  ModelScale: string;
  IsSummoned: string;
  CanBeDominated: string;
  UnitLabel: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  AttackCapabilities: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackDamageType: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  BoundsHullName: string;
  HealthBarOffset: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  vscripts: string;
}
interface Taipingqinglingdaoyuancheng {
  BaseClass: string;
  Model: string;
  SoundSet: string;
  Level: string;
  ModelScale: string;
  IsSummoned: string;
  CanBeDominated: string;
  UnitLabel: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  AttackCapabilities: string;
  BaseAttackSpeed: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackDamageType: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  BoundsHullName: string;
  HealthBarOffset: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  vscripts: string;
}
interface Taipingqinglingdaojinzhan {
  BaseClass: string;
  Model: string;
  SoundSet: string;
  Level: string;
  ModelScale: string;
  IsSummoned: string;
  CanBeDominated: string;
  UnitLabel: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  AttackCapabilities: string;
  BaseAttackSpeed: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackDamageType: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  BoundsHullName: string;
  HealthBarOffset: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  TeamName: string;
  CombatClassAttack: string;
  CombatClassDefend: string;
  UnitRelationshipClass: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  vscripts: string;
}
interface Xianzhitreant {
  BaseClass: string;
  Model: string;
  SoundSet: string;
  GameSoundsFile: string;
  ModelScale: string;
  Level: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  AttackCapabilities: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackDamageType: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  BountyXP: string;
  BountyGoldMin: string;
  BountyGoldMax: string;
  BoundsHullName: string;
  HealthBarOffset: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  RingRadius: string;
  vscripts: string;
}
interface Yaokongzhadan {
  Model: string;
  BaseClass: string;
  SoundSet: string;
  Level: string;
  ModelScale: string;
  SelectionGroup: string;
  BoundsHullName: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  ArmorPhysical: string;
  AttackCapabilities: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  HealthBarOffset: string;
  BountyXP: string;
  BountyGoldMin: string;
  BountyGoldMax: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  TeamName: string;
  CombatClassAttack: string;
  CombatClassDefend: string;
  UnitRelationshipClass: string;
}
interface Muniuliuma1 {
  Model: string;
  BaseClass: string;
  SoundSet: string;
  GameSoundsFile: string;
  Level: string;
  ModelScale: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  ArmorPhysical: string;
  AttackCapabilities: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  RingRadius: string;
  HealthBarOffset: string;
  BountyXP: string;
  BountyGoldMin: string;
  BountyGoldMax: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  Creature: Creature;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  Ability9: string;
  Ability10: string;
  Ability11: string;
  Ability12: string;
  Ability13: string;
  Ability14: string;
  Ability15: string;
  Ability16: string;
  HasInventory: string;
  ConsideredHero: string;
  BoundsHullName: string;
  MagicalResistance: string;
  vscripts: string;
}
interface Creature {
  HPGain: string;
  DamageGain: string;
  ArmorGain: string;
  MagicResistGain: string;
  MoveSpeedGain: string;
  BountyGain: string;
  XPGain: string;
}
interface Portraitscustom {
  '10702': Modelscourierdoomdemiherocourierdoomdemiherocouriervmdl;
  'models/courier/doom_demihero_courier/doom_demihero_courier.vmdl': Modelscourierdoomdemiherocourierdoomdemiherocouriervmdl;
  'models/hero/zhangjiao/zhangjiao.vmdl': Default2;
  'models/hero/zhoucang/zhoucang.vmdl': Default2;
  'models/hero/zhenji/zhenji.vmdl': Default2;
  'models/hero/zhaoyun/zhaoyun.vmdl': Default2;
  'models/hero/zhangliang/zhangliang.vmdl': Default2;
  'models/hero/zhangfei_old/zhangfei2.vmdl': Default2;
  'models/hero/yuanshao/yuanshao.vmdl': Default2;
  'models/hero/xushu/xushu.vmdl': Default2;
  'models/hero/xiaoqiao/xiaoqiao.vmdl': Default2;
  'models/hero/xiahoudun/xiahoudun.vmdl': Default2;
  'models/hero/sunjian/sunjian.vmdl': Default2;
  'models/hero/sunce/sunce.vmdl': Default2;
  'models/hero/pangtong/pangtong.vmdl': Default2;
  'models/hero/machao/machao.vmdl': Default2;
  'models/hero/lvbu/lvbu.vmdl': Default2;
  'models/hero/luxun/luxun.vmdl': Default2;
  'models/hero/liubiao/liubiao.vmdl': Default2;
  'models/hero/liubei/liubei.vmdl': Default2;
  'models/hero/huatuo/huatuo.vmdl': Default2;
  'models/hero/huangzhong/huangzhong.vmdl': Default2;
  'models/hero/huanggai/huanggai.vmdl': Default2;
  'models/hero/guanyu/guanyu.vmdl': Default2;
  'models/hero/dongzhuo/dongzhuo.vmdl': Default2;
  'models/hero/diaochan/diaochan.vmdl': Default2;
  'models/hero/dianwei/dianwei.vmdl': Default2;
  'models/hero/daqiao/daqiao.vmdl': Default2;
  'models/hero/caoren/caoren.vmdl': Default2;
  'models/hero/zhugeliang/zhugeliang.vmdl': Default2;
  'models/hero/zhangfei/zhangfei.vmdl': Default2;
  'models/hero/caocao/caocao.vmdl': Default2;
  'models/hero/caohong/caohong.vmdl': Default2;
  'models/hero/guojia/guojia.vmdl': Default2;
  'models/hero/xunyu/xunyu.vmdl': Default2;
  'models/hero/yuanshu/yuanshu.vmdl': Default2;
  'models/couriers/jsmachao/jsmachao.vmdl': Default2;
}
interface Portraits {
  Version: string;
  PreferModelNames: string;
  DefaultActivity: string;
  CannotChangeActivity: string;
  default: Default2;
  default_entity_replacement: Defaultentityreplacement;
  default_ward: Defaultward;
  default_courier: Defaultentityreplacement;
  default_courier_flying: Defaultcourierflying;
  'models/heroes/abaddon/abaddon.vmdl': Modelsheroesabaddonabaddonvmdl;
  'models/heroes/abyssal_underlord/abyssal_underlord_V2.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/alchemist/alchemist.vmdl': Default2;
  'models/heroes/antimage/antimage.vmdl': Default2;
  'models/heroes/antimage_female/antimage_female.vmdl': Modelsheroesantimagefemaleantimagefemalevmdl;
  'models/heroes/axe/axe.vmdl': Default2;
  'models/heroes/bounty_hunter/bounty_hunter.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/chaos_knight/chaos_knight.vmdl': Default2;
  'models/heroes/chen/chen.vmdl': Modelsheroeschenchenvmdl;
  'models/heroes/crystal_maiden/crystal_maiden.vmdl': Default2;
  'models/heroes/crystal_maiden/crystal_maiden_arcana.vmdl': Default2;
  'models/heroes/drow/drow_base.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/earthshaker/earthshaker.vmdl': Default2;
  'models/heroes/bane/bane.vmdl': Default2;
  'models/heroes/brewmaster/brewmaster.vmdl': Default2;
  'models/heroes/brewmaster/brewmaster_earthspirit.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/brewmaster/brewmaster_firespirit.vmdl': Default2;
  'models/heroes/brewmaster/brewmaster_windspirit.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/undying/undying.vmdl': Modelsheroeschenchenvmdl;
  'models/heroes/undying/undying_flesh_golem.vmdl': Modelsheroeschenchenvmdl;
  'models/heroes/undying/undying_minion.vmdl': Default2;
  'models/heroes/undying/undying_minion_torso.vmdl': Default2;
  'models/heroes/undying/undying_tower.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/items/undying/idol_of_ruination/ruin_wight_minion_torso.vmdl': Default2;
  'models/items/undying/idol_of_ruination/ruin_wight_minion.vmdl': Default2;
  'models/items/undying/idol_of_ruination/idol_tower.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/items/undying/idol_of_ruination/ruin_wight_minion_torso_gold.vmdl': Default2;
  'models/items/undying/idol_of_ruination/ruin_wight_minion_gold.vmdl': Default2;
  'models/items/undying/idol_of_ruination/idol_tower_gold.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/siren/siren.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/mirana/mirana.vmdl': Modelsheroesmiranamiranavmdl;
  'models/heroes/nevermore/nevermore.vmdl': Default2;
  'models/heroes/shadow_fiend/shadow_fiend.vmdl': Default2;
  'models/heroes/medusa/medusa.vmdl': Default2;
  'models/heroes/morphling/morphling.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/obsidian_destroyer/obsidian_destroyer.vmdl': Default2;
  'models/heroes/omniknight/omniknight.vmdl': Default2;
  'models/heroes/puck/puck.vmdl': Default2;
  'models/heroes/pudge/pudge.vmdl': Default2;
  'models/items/pudge/arcana/pudge_arcana_base.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/pudge_cute/pudge_cute.vmdl': Modelsheroespudgecutepudgecutevmdl;
  'models/heroes/razor/razor.vmdl': Default2;
  'models/heroes/sand_king/sand_king.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/shadow_demon/shadow_demon.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/silencer/silencer.vmdl': Default2;
  'models/heroes/storm_spirit/storm_spirit.vmdl': Modelsheroesstormspiritstormspiritvmdl;
  'models/heroes/ember_spirit/ember_spirit.vmdl': Default2;
  'models/heroes/sven/sven.vmdl': Default2;
  'models/heroes/vengeful/vengeful.vmdl': Default2;
  'models/heroes/windrunner/windrunner.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/items/windrunner/windrunner_arcana/wr_arcana_base.vmdl': Modelsheroespudgecutepudgecutevmdl;
  'models/heroes/windrunner/windrunner2.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/zuus/zuus.vmdl': Default2;
  'models/heroes/zeus/zeus.vmdl': Modelsheroesmiranamiranavmdl;
  'models/heroes/kunkka/kunkka.vmdl': Default2;
  'models/heroes/lina/lina.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/lina/lina2.vmdl': Default2;
  'models/heroes/lich/lich.vmdl': Default2;
  'models/heroes/lion/lion.vmdl': Default2;
  'models/heroes/phoenix/phoenix_bird.vmdl': Default2;
  'models/heroes/phoenix/phoenix_egg.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/shadowshaman/shadowshaman.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/slardar/slardar.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/slark/slark.vmdl': Modelsheroesslarkslarkvmdl;
  'models/heroes/magnataur/magnataur.vmdl': Default2;
  'models/heroes/centaur/centaur.vmdl': Default2;
  'models/heroes/shredder/shredder.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/tidehunter/tidehunter.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/witchdoctor/witchdoctor.vmdl': Default2;
  'models/items/witchdoctor/bonkers_the_mad/bonkers_the_mad.vmdl': Default2;
  'models/heroes/witchdoctor/witchdoctor_ward.vmdl': Modelsheroeswitchdoctorwitchdoctorwardvmdl;
  'models/heroes/jakiro/jakiro.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/juggernaut/juggernaut.vmdl': Modelsheroesjuggernautjuggernautvmdl;
  'models/heroes/juggernaut/jugg_healing_ward.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/rikimaru/rikimaru.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/enigma/enigma.vmdl': Default2;
  'models/heroes/tinker/tinker.vmdl': Default2;
  'models/heroes/sniper/sniper.vmdl': Default2;
  'models/heroes/necrolyte/necrolyte.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/warlock/warlock.vmdl': Default2;
  'models/heroes/beastmaster/beastmaster.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/queenofpain/queenofpain.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/queenofpain/queenofpain2.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/heroes/venomancer/venomancer.vmdl': Default2;
  'models/heroes/faceless_void/faceless_void.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/skeleton_king/skeleton_king.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/heroes/wraith_king/wraith_king.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/wraith_king/wraith_frost.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/death_prophet/death_prophet.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/phantom_assassin/phantom_assassin.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/heroes/phantom_assassin/pa_arcana.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/heroes/pugna/pugna.vmdl': Default2;
  'models/heroes/pugna/pugna_ward.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/viper/viper.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/dazzle/dazzle.vmdl': Default2;
  'models/heroes/rattletrap/rattletrap.vmdl': Default2;
  'models/heroes/rattletrap/rattletrap_cog.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/heroes/blood_seeker/blood_seeker.vmdl': Default2;
  'models/items/wards/blood_seeker_ward/bloodseeker_ward.vmdl': Default2;
  'models/heroes/leshrac/leshrac.vmdl': Default2;
  'models/heroes/furion/furion.vmdl': Default2;
  'models/heroes/furion/treant.vmdl': Default2;
  'models/items/furion/treant_stump.vmdl': Default2;
  'models/items/furion/treant_flower_1.vmdl': Default2;
  'models/items/furion/treant/hallowed_horde/hallowed_horde.vmdl': Default2;
  'models/heroes/life_stealer/life_stealer.vmdl': Default2;
  'models/heroes/dark_seer/dark_seer.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/spectre/spectre.vmdl': Default2;
  'models/heroes/dragon_knight/dragon_knight.vmdl': Default2;
  'models/heroes/dragon_knight/dragon_knight_dragon.vmdl': Default2;
  'models/heroes/tiny/tiny_01/tiny_01.vmdl': Default2;
  'models/heroes/tiny/tiny_02/tiny_02.vmdl': Default2;
  'models/heroes/tiny/tiny_03/tiny_03.vmdl': Default2;
  'models/heroes/tiny/tiny_04/tiny_04.vmdl': Default2;
  'models/heroes/enchantress/enchantress.vmdl': Default2;
  'models/props_gameplay/donkey.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_gameplay/donkey_wings.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_gameplay/donkey_dire.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_gameplay/donkey_dire_wings.vmdl': Default2;
  'models/courier/minipudge/minipudge.vmdl': Default2;
  'models/courier/minipudge/minipudge_flying.vmdl': Default2;
  'models/courier/yak/yak.vmdl': Default2;
  'models/courier/yak/yak_wings.vmdl': Default2;
  'models/courier/stump/stump.vmdl': Default2;
  'models/courier/stump/stump_flying.vmdl': Default2;
  'models/creeps/lane_creeps/wizard/wizard.vmdl': Default2;
  'models/heroes/enigma/eidelon.vmdl': Default2;
  'models/heroes/clinkz/clinkz.vmdl': Default2;
  'models/heroes/huskar/huskar.vmdl': Default2;
  'models/heroes/nightstalker/nightstalker.vmdl': Default2;
  'models/heroes/nightstalker/nightstalker_night.vmdl': Default2;
  'models/heroes/broodmother/broodmother.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/lanaya/lanaya.vmdl': Default2;
  'models/items/lycan/ultimate/sirius_curse/sirius_curse.vmdl': Default2;
  'models/items/lycan/ultimate/alpha_trueform9/alpha_trueform9.vmdl': Default2;
  'models/heroes/lycan/summon_wolves.vmdl': Default2;
  'models/items/lycan/wolves/icewrack_pack/icewrack_pack.vmdl': Default2;
  'models/items/lycan/wolves/alpha_summon_01/alpha_summon_01.vmdl': Default2;
  'models/heroes/twin_headed_dragon/twin_headed_dragon.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/batrider/batrider.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/weaver/weaver.vmdl': Default2;
  'models/heroes/doom/doom.vmdl': Default2;
  'models/heroes/ursa/ursa.vmdl': Default2;
  'models/heroes/ancient_apparition/ancient_apparition.vmdl': Default2;
  'models/heroes/gyro/gyro.vmdl': Default2;
  'models/heroes/spirit_breaker/spirit_breaker.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/invoker/invoker.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/lycan/lycan.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/lycan/lycan_wolf.vmdl': Default2;
  'models/heroes/phantom_lancer/phantom_lancer.vmdl': Default2;
  'models/heroes/ogre_magi/ogre_magi.vmdl': Default2;
  'models/heroes/disruptor/disruptor.vmdl': Default2;
  'models/heroes/meepo/meepo.vmdl': Default2;
  'models/heroes/luna/luna.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/nerubian_assassin/nerubian_assassin.vmdl': Default2;
  'models/heroes/nerubian_assassin/mound.vmdl': Default2;
  'models/heroes/wisp/wisp.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/wisp/wisp_effigy.vmdl': Default2;
  'models/heroes/visage/visage.vmdl': Default2;
  'models/heroes/visage/visage_familiar.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/tuskarr/tuskarr.vmdl': Modelsheroestuskarrtuskarrvmdl;
  'models/heroes/elder_titan/elder_titan.vmdl': Default2;
  'models/heroes/elder_titan/ancestral_spirit.vmdl': Modelsheroeseldertitanancestralspiritvmdl;
  'models/heroes/skywrath_mage/skywrath_mage.vmdl': Default2;
  'models/heroes/bristleback/bristleback.vmdl': Default2;
  'models/courier/frog/frog.vmdl': Default2;
  'models/courier/frog/frog_flying.vmdl': Default2;
  'models/props_gameplay/chicken.vmdl': Default2;
  'models/props_gameplay/frog.vmdl': Default2;
  'models/props_gameplay/pig.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/items/hex/fish_hex/fish_hex.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/warlock/warlock_demon.vmdl': Default2;
  'models/heroes/beastmaster/beastmaster_beast.vmdl': Default2;
  'models/heroes/beastmaster/beastmaster_bird.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_dragonspawn_a/n_creep_dragonspawn_a.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/creeps/neutral_creeps/n_creep_dragonspawn_b/n_creep_dragonspawn_b.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_big.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_small.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_kobold/kobold_a/n_creep_kobold_a.vmdl': Modelscreepsneutralcreepsncreepkoboldkoboldancreepkoboldavmdl;
  'models/heroes/venomancer/venomancer_ward.vmdl': Default2;
  'models/items/venomancer/centipede_ward/centipede_ward.vmdl': Default2;
  'models/heroes/shadowshaman/shadowshaman_totem.vmdl': Default2;
  'models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee_mega.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged_mega.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_radiant_melee/radiant_melee.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_radiant_melee/radiant_melee_mega.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged_mega.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/neutral_creeps/n_creep_satyr_a/n_creep_satyr_a.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_satyr_b/n_creep_satyr_b.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_satyr_c/n_creep_satyr_c.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_a.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/creeps/neutral_creeps/n_creep_worg_large/n_creep_worg_large.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_worg_small/n_creep_worg_small.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_harpy_a/n_creep_harpy_a.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_harpy_b/n_creep_harpy_b.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_black_drake/n_creep_black_drake.vmdl': Modelsheroesmiranamiranavmdl;
  'models/creeps/neutral_creeps/n_creep_black_dragon/n_creep_black_dragon.vmdl': Modelsheroesmiranamiranavmdl;
  'models/creeps/neutral_creeps/n_creep_troll_dark_a/n_creep_troll_dark_a.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_troll_dark_b/n_creep_troll_dark_b.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_troll_dark_b/n_creep_troll_dark_frost.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_beast/n_creep_beast.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_furbolg/n_creep_furbolg_disrupter.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl': Default2;
  'models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_structures/tower_good.vmdl': Default2;
  'models/props_structures/tower_good2.vmdl': Default2;
  'models/props_structures/tower_good3.vmdl': Default2;
  'models/props_structures/tower_good3_dest_lvl1.vmdl': Default2;
  'models/props_structures/tower_good3_dest_lvl2.vmdl': Default2;
  'models/props_structures/good_barracks_melee001.vmdl': Default2;
  'models/props_structures/good_barracks_melee002_lvl1.vmdl': Default2;
  'models/props_structures/good_barracks_melee002_lvl2.vmdl': Default2;
  'models/props_structures/good_barracks_ranged001.vmdl': Default2;
  'models/props_structures/good_barracks_ranged002_lvl1.vmdl': Default2;
  'models/props_structures/good_barracks_ranged002_lvl2.vmdl': Default2;
  'models/props_structures/good_statue008.vmdl': Default2;
  'models/props_structures/good_statue010.vmdl': Default2;
  'models/props_structures/good_ancient001.vmdl': Default2;
  'models/props_structures/good_fountain001.vmdl': Default2;
  'models/props_structures/tower_bad.vmdl': Default2;
  'models/props_structures/bad_tower_destruction_lev1.vmdl': Default2;
  'models/props_structures/bad_tower_destruction_lev2.vmdl': Default2;
  'models/props_structures/bad_barracks001_melee.vmdl': Default2;
  'models/props_structures/bad_barrack001_melee_destruction_lev1.vmdl': Default2;
  'models/props_structures/bad_barrack001_melee_destruction_lev2.vmdl': Default2;
  'models/props_structures/bad_barracks001_ranged.vmdl': Default2;
  'models/props_structures/bad_barrack001_ranged_destruction_lev1.vmdl': Default2;
  'models/props_structures/bad_barrack001_ranged_destruction_lev2.vmdl': Default2;
  'models/props_structures/bad_statue001.vmdl': Default2;
  'models/props_structures/bad_statue002.vmdl': Default2;
  'models/props_structures/bad_column001.vmdl': Default2;
  'models/props_structures/bad_ancient002.vmdl': Default2;
  'models/props_structures/dire_fountain002.vmdl': Modelspropsstructuresdirefountain002vmdl;
  'models/creeps/roshan/roshan.vmdl': Default2;
  'models/creeps/baby_rosh_halloween/baby_rosh_dire/baby_rosh_dire.vmdl': Default2;
  'models/creeps/baby_rosh_halloween/baby_rosh_radiant/baby_rosh_radiant.vmdl': Default2;
  'models/courier/baby_rosh/babyroshan.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/courier/baby_rosh/babyroshan_flying.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/courier/baby_rosh/babyroshan_elemental.vmdl': Default2;
  'models/courier/baby_rosh/babyroshan_elemental_flying.vmdl': Default2;
  'models/courier/baby_rosh/babyroshan_winter18.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/courier/baby_rosh/babyroshan_winter18_flying.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/courier/octopus/octopus.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/courier/octopus/octopus_flying.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/courier/doom_demihero_courier/doom_demihero_courier.vmdl': Modelscourierdoomdemiherocourierdoomdemiherocouriervmdl;
  'models/courier/doom_demihero_courier/doom_demihero_courier_flying.vmdl': Default2;
  'models/courier/donkey_crummy_wizard_2014/donkey_crummy_wizard_2014.vmdl': Default2;
  'models/courier/donkey_crummy_wizard_2014/donkey_crummy_wizard_2014_flying.vmdl': Default2;
  'models/creeps/roshan_halloween/roshan_halloween.vmdl': Default2;
  'models/props_gameplay/pumpkin_bucket.vmdl': Default2;
  'models/creeps/item_creeps/i_creep_necro_warrior/necro_warrior.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/creeps/item_creeps/i_creep_necro_archer/necro_archer.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/creeps/neutral_creeps/n_creep_ogre_med/n_creep_ogre_med.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_ogre_lrg/n_creep_ogre_lrg.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_troll_skeleton/n_creep_skeleton_melee.vmdl': Modelscreepsneutralcreepsncreepkoboldkoboldancreepkoboldavmdl;
  'models/creeps/neutral_creeps/n_creep_gargoyle/n_creep_gargoyle.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/creeps/neutral_creeps/n_creep_jungle_stalker/n_creep_jungle_stalker.vmdl': Modelsheroesqueenofpainqueenofpain2vmdl;
  'models/creeps/neutral_creeps/n_creep_kobold/kobold_b/n_creep_kobold_b.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_kobold/kobold_c/n_creep_kobold_c.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_kobold/kobold_c/n_creep_kobold_frost.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_ghost_b/n_creep_ghost_b.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_ghost_b/n_creep_ghost_frost.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_ghost_a/n_creep_ghost_a.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_centaur_lrg/n_creep_centaur_lrg.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_centaur_med/n_creep_centaur_med.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_vulture_a/n_creep_vulture_a.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_vulture_b/n_creep_vulture_b.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_gnoll/n_creep_gnoll.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_gnoll/n_creep_gnoll_frost.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_berserker.vmdl': Default2;
  'models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_high_priest.vmdl': Default2;
  'models/heroes/broodmother/spiderling.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/courier/tegu/tegu.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/courier/tegu/tegu_flying.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/courier/juggernaut_dog/juggernaut_dog.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/courier/juggernaut_dog/juggernaut_dog_wings.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/heroes/invoker/forge_spirit.vmdl': Default2;
  'models/heroes/keeper_of_the_light/keeper_of_the_light.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/lone_druid/lone_druid.vmdl': Default2;
  'models/heroes/lone_druid/spirit_bear.vmdl': Default2;
  'models/heroes/lone_druid/true_form.vmdl': Default2;
  'models/heroes/treant_protector/treant_protector.vmdl': Default2;
  'models/heroes/rubick/rubick.vmdl': Default2;
  'models/heroes/troll_warlord/troll_warlord.vmdl': Default2;
  'models/props_gameplay/default_ward.vmdl': Default2;
  'models/items/wards/crystal_maiden_ward/crystal_maiden_ward.vmdl': Default2;
  'models/items/wards/f2p_ward/f2p_ward.vmdl': Modelsitemswardsf2pwardf2pwardvmdl;
  'models/items/wards/shadow_demon_ward/shadowdemon_ward.vmdl': Default2;
  'models/items/wards/bane_ward/bane_ward.vmdl': Default2;
  'models/items/wards/chinese_ward/chinese_ward.vmdl': Default2;
  'models/items/wards/chen_ward/chen_ward.vmdl': Default2;
  'models/items/wards/disruptor_ward/disruptor_ward.vmdl': Default2;
  'models/items/wards/lina_ward/lina_ward.vmdl': Default2;
  'models/items/wards/venomancer_ward/venomancer_ward.vmdl': Default2;
  'models/items/wards/witchdoctor_ward/witchdoctor_ward.vmdl': Default2;
  'models/creeps/roshan/aegis.vmdl': Default2;
  'models/courier/imp/imp.vmdl': Default2;
  'models/courier/imp/imp_flying.vmdl': Default2;
  'models/courier/courier_mech/courier_mech.vmdl': Default2;
  'models/courier/courier_mech/courier_mech_flying.vmdl': Default2;
  'models/courier/mighty_boar/mighty_boar.vmdl': Default2;
  'models/courier/mighty_boar/mighty_boar_wings.vmdl': Default2;
  'models/courier/badger/courier_badger.vmdl': Default2;
  'models/courier/badger/courier_badger_flying.vmdl': Default2;
  'models/courier/drodo/drodo.vmdl': Default2;
  'models/courier/drodo/drodo_flying.vmdl': Default2;
  'models/courier/sw_donkey/sw_donkey.vmdl': Default2;
  'models/courier/sw_donkey/sw_donkey_flying.vmdl': Default2;
  'models/courier/turtle_rider/turtle_rider.vmdl': Default2;
  'models/courier/turtle_rider/turtle_rider_flying.vmdl': Default2;
  'models/courier/lockjaw/lockjaw.vmdl': Defaultcourierflying;
  'models/courier/lockjaw/lockjaw_flying.vmdl': Defaultcourierflying;
  'models/courier/greevil/greevil.vmdl': Default2;
  'models/courier/greevil/greevil_flying.vmdl': Default2;
  'models/creeps/greevil_shopkeeper/greevil_shopkeeper.vmdl': Default2;
  'models/courier/greevil/gold_greevil.vmdl': Default2;
  'models/courier/greevil/gold_greevil_flying.vmdl': Default2;
  'models/creeps/mega_greevil/mega_greevil.vmdl': Default2;
  'models/courier/mega_greevil_courier/mega_greevil_courier.vmdl': Default2;
  'models/courier/mega_greevil_courier/mega_greevil_courier_flying.vmdl': Default2;
  'models/courier/gold_mega_greevil/gold_mega_greevil.vmdl': Default2;
  'models/courier/gold_mega_greevil/gold_mega_greevil_flying.vmdl': Default2;
  'models/courier/f2p_courier/f2p_courier.vmdl': Modelsitemswardsf2pwardf2pwardvmdl;
  'models/courier/f2p_courier/f2p_courier_flying.vmdl': Default2;
  'models/creeps/lane_creeps/creep_bad_melee_diretide/creep_bad_melee_diretide.vmdl': Default2;
  'models/creeps/lane_creeps/creep_bad_ranged_diretide/creep_bad_ranged_diretide.vmdl': Default2;
  'models/creeps/lane_creeps/creep_radiant_melee_diretide/creep_radiant_melee_diretide.vmdl': Default2;
  'models/creeps/lane_creeps/creep_radiant_ranged_diretide/creep_radiant_ranged_diretide.vmdl': Default2;
  'models/courier/defense3_sheep/defense3_sheep.vmdl': Default2;
  'models/courier/defense3_sheep/defense3_sheep_flying.vmdl': Default2;
  'models/courier/navi_courier/navi_courier.vmdl': Default2;
  'models/courier/navi_courier/navi_courier_flying.vmdl': Default2;
  'models/courier/sillydragon/sillydragon.vmdl': Default2;
  'models/courier/sillydragon/sillydragon_flying.vmdl': Default2;
  'models/items/lone_druid/viciouskraitpanda/viciouskrait_panda.vmdl': Default2;
  'models/items/wards/warlock_hells_sight/warlock_hells_sight.vmdl': Default2;
  'models/items/courier/mighty_chicken/mighty_chicken.vmdl': Default2;
  'models/items/courier/mighty_chicken/mighty_chicken_flying.vmdl': Default2;
  'models/items/courier/premier_league_wyrmeleon/premier_league_wyrmeleon.vmdl': Default2;
  'models/items/courier/premier_league_wyrmeleon/premier_league_wyrmeleon_flying.vmdl': Default2;
  'models/items/courier/starladder_grillhound/starladder_grillhound.vmdl': Default2;
  'models/items/courier/starladder_grillhound/starladder_grillhound_flying.vmdl': Default2;
  'models/heroes/tuskarr/tuskarr_sigil.vmdl': Modelsheroeseldertitanancestralspiritvmdl;
  'models/items/wards/tide_bottom_watcher/tide_bottom_watcher.vmdl': Defaultcourierflying;
  'models/items/wards/jakiro_pyrexae_ward/jakiro_pyrexae_ward.vmdl': Defaultcourierflying;
  'models/items/wards/sea_dogs_watcher/sea_dogs_watcher.vmdl': Defaultcourierflying;
  'models/items/courier/jilling_ben_courier/jilling_ben_courier.vmdl': Defaultcourierflying;
  'models/items/courier/jilling_ben_courier/jilling_ben_courier_flying.vmdl': Defaultcourierflying;
  'models/items/wards/lich_black_pool_watcher/lich_black_pool_watcher.vmdl': Defaultcourierflying;
  'models/heroes/gyro/gyro_missile.vmdl': Defaultcourierflying;
  'models/items/courier/captain_bamboo/captain_bamboo.vmdl': Defaultcourierflying;
  'models/items/courier/captain_bamboo/captain_bamboo_flying.vmdl': Defaultcourierflying;
  'models/items/courier/snail/courier_snail.vmdl': Defaultcourierflying;
  'models/items/courier/snail/courier_snail_flying.vmdl': Defaultcourierflying;
  'models/items/courier/g1_courier/g1_courier.vmdl': Defaultcourierflying;
  'models/items/courier/g1_courier/g1_courier_flying.vmdl': Defaultcourierflying;
  'models/items/courier/snowl/snowl.vmdl': Defaultcourierflying;
  'models/items/courier/snowl/snowl_flying.vmdl': Defaultcourierflying;
  'models/heroes/legion_commander/legion_commander.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/courier/frull/frull_courier.vmdl': Default2;
  'models/items/courier/throe/throe.vmdl': Defaultcourierflying;
  'models/items/courier/throe/throe_flying.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/courier/livery_llama_courier/livery_llama_courier.vmdl': Defaultcourierflying;
  'models/items/courier/livery_llama_courier/livery_llama_courier_flying.vmdl': Defaultcourierflying;
  'models/items/courier/kupu_courier/kupu_courier.vmdl': Defaultcourierflying;
  'models/items/courier/kupu_courier/kupu_courier_flying.vmdl': Defaultcourierflying;
  'models/items/courier/gnomepig/gnomepig.vmdl': Defaultcourierflying;
  'models/items/courier/gnomepig/gnomepig_flying.vmdl': Defaultcourierflying;
  'models/courier/smeevil/smeevil.vmdl': Default2;
  'models/courier/smeevil/smeevil_flying.vmdl': Default2;
  'models/courier/smeevil_bird/smeevil_bird.vmdl': Default2;
  'models/courier/smeevil_bird/smeevil_bird_flying.vmdl': Default2;
  'models/courier/smeevil_mammoth/smeevil_mammoth.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/courier/smeevil_mammoth/smeevil_mammoth_flying.vmdl': Default2;
  'models/courier/godhorse/godhorse.vmdl': Defaultcourierflying;
  'models/courier/godhorse/godhorse_flying.vmdl': Default2;
  'models/courier/smeevil_crab/smeevil_crab.vmdl': Default2;
  'models/courier/smeevil_crab/smeevil_crab_flying.vmdl': Default2;
  'models/courier/smeevil_magic_carpet/smeevil_magic_carpet.vmdl': Default2;
  'models/courier/smeevil_magic_carpet/smeevil_magic_carpet_flying.vmdl': Default2;
  'models/items/courier/d2l_steambear/d2l_steambear.vmdl': Defaultcourierflying;
  'models/items/courier/d2l_steambear/d2l_steambear_flying.vmdl': Defaultcourierflying;
  'models/items/courier/shagbark/shagbark.vmdl': Defaultcourierflying;
  'models/items/courier/shagbark/shagbark_flying.vmdl': Defaultcourierflying;
  'models/items/courier/defense4_radiant/defense4_radiant.vmdl': Defaultcourierflying;
  'models/items/courier/defense4_radiant/defense4_radiant_flying.vmdl': Defaultcourierflying;
  'models/items/courier/defense4_dire/defense4_dire.vmdl': Defaultcourierflying;
  'models/items/courier/defense4_dire/defense4_dire_flying.vmdl': Defaultcourierflying;
  'models/items/courier/el_gato_beyond_the_summit/el_gato_beyond_the_summit.vmdl': Defaultcourierflying;
  'models/items/courier/el_gato_beyond_the_summit/el_gato_beyond_the_summit_flying.vmdl': Defaultcourierflying;
  'models/items/courier/mok/mok.vmdl': Defaultcourierflying;
  'models/items/courier/mok/mok_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/lgd_golden_skipper/lgd_golden_skipper.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/lgd_golden_skipper/lgd_golden_skipper_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/courier/donkey_unicorn/donkey_unicorn.vmdl': Default2;
  'models/courier/donkey_unicorn/donkey_unicorn_flying.vmdl': Default2;
  'models/items/courier/alphid_of_lecaciida/alphid_of_lecaciida.vmdl': Defaultcourierflying;
  'models/items/courier/alphid_of_lecaciida/alphid_of_lecaciida_flying.vmdl': Defaultcourierflying;
  'models/items/courier/tinkbot/tinkbot.vmdl': Defaultcourierflying;
  'models/items/courier/tinkbot/tinkbot_flying.vmdl': Defaultcourierflying;
  'models/items/courier/blotto_and_stick/blotto.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/blotto_and_stick/blotto_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/courier/otter_dragon/otter_dragon.vmdl': Default2;
  'models/courier/otter_dragon/otter_dragon_flying.vmdl': Default2;
  'models/items/courier/deathripper/deathripper.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/items/courier/deathripper/deathripper_flying.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/items/lone_druid/bear/spirit_of_the_atniw/spirit_of_the_atniw.vmdl': Default2;
  'models/items/lone_druid/true_form/form_of_the_atniw/form_of_the_atniw.vmdl': Default2;
  'models/items/lone_druid/true_form/wizened_bear/wizened_bear.vmdl': Default2;
  'models/items/lone_druid/true_form/rabid_black_bear/rabid_black_bear.vmdl': Default2;
  'models/items/wards/polycount_ward/polycount_ward.vmdl': Default2;
  'models/items/wards/dire_ward_eye/dire_ward_eye.vmdl': Default2;
  'models/items/wards/augurys_guardian/augurys_guardian.vmdl': Default2;
  'models/items/wards/skywrath_sentinel/skywrath_sentinel.vmdl': Default2;
  'models/items/wards/spell_surveyor/spell_surveyor.vmdl': Default2;
  'models/items/courier/ig_dragon/ig_dragon.vmdl': Defaultcourierflying;
  'models/items/courier/ig_dragon/ig_dragon_flying.vmdl': Defaultcourierflying;
  'models/items/wards/ocula/ocula.vmdl': Defaultcourierflying;
  'models/items/wards/portal_ward/portal_ward.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/raidcall_ems_one_turtle/raidcall_ems_one_turtle.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/raidcall_ems_one_turtle/raidcall_ems_one_turtle_flying.vmdl': Defaultcourierflying;
  'models/items/courier/arneyb_rabbit/arneyb_rabbit.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/arneyb_rabbit/arneyb_rabbit_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/weplay_beaver/weplay_beaver.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/weplay_beaver/weplay_beaver_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/warlock/golem/obsidian_golem/obsidian_golem.vmdl': Defaultcourierflying;
  'models/items/courier/baekho/baekho_flying.vmdl': Defaultcourierflying;
  'models/items/courier/baekho/baekho.vmdl': Defaultcourierflying;
  'models/items/courier/scuttling_scotty_penguin/scuttling_scotty_penguin.vmdl': Defaultcourierflying;
  'models/items/courier/scuttling_scotty_penguin/scuttling_scotty_penguin_flying.vmdl': Defaultcourierflying;
  'models/items/wards/celestial_observatory/celestial_observatory.vmdl': Defaultcourierflying;
  'models/items/courier/el_gato_hero/el_gato_hero_flying.vmdl': Defaultcourierflying;
  'models/items/courier/el_gato_hero/el_gato_hero.vmdl': Defaultcourierflying;
  'models/heroes/earth_spirit/earth_spirit.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/heroes/terrorblade/terrorblade.vmdl': Modelsheroesterrorbladeterrorbladevmdl;
  'models/heroes/terrorblade/terrorblade_arcana.vmdl': Default2;
  'models/heroes/terrorblade/demon.vmdl': Modelsheroesterrorbladedemonvmdl;
  'models/items/courier/echo_wisp/echo_wisp.vmdl': Defaultcourierflying;
  'models/items/courier/echo_wisp/echo_wisp_flying.vmdl': Defaultcourierflying;
  'models/items/wards/warding_guise/warding_guise.vmdl': Defaultcourierflying;
  'models/items/courier/azuremircourierfinal/azuremircourierfinal.vmdl': Defaultcourierflying;
  'models/items/courier/azuremircourierfinal/azuremircourierfinal_flying.vmdl': Defaultcourierflying;
  'models/items/courier/deathbringer/deathbringer.vmdl': Defaultcourierflying;
  'models/items/courier/deathbringer/deathbringer_flying.vmdl': Defaultcourierflying;
  'models/items/wards/nexon_sotdaeward/nexon_sotdaeward.vmdl': Defaultcourierflying;
  'models/items/wards/mlgward_yeah5/mlgward_yeah5.vmdl': Defaultcourierflying;
  'models/items/death_prophet/exorcism/ghost_mugen_augurs_curse/ghost_mugen_augurs_curse.vmdl': Defaultcourierflying;
  'models/items/death_prophet/exorcism/ghost_mugen_aurgurs/ghost_mugen_aurgurs.vmdl': Defaultcourierflying;
  'models/items/courier/coco_the_courageous/coco_the_courageous.vmdl': Defaultcourierflying;
  'models/items/courier/coco_the_courageous/coco_the_courageous_flying.vmdl': Defaultcourierflying;
  'models/items/courier/tory_the_sky_guardian/tory_the_sky_guardian.vmdl': Defaultcourierflying;
  'models/items/warlock/golem/doom_of_ithogoaki/doom_of_ithogoaki.vmdl': Defaultcourierflying;
  'models/items/warlock/archivist_golem/archivist_golem.vmdl': Default2;
  'models/items/warlock/golem/the_torchbearer/the_torchbearer.vmdl': Defaultcourierflying;
  'models/items/wards/eye_of_avernus_ward/eye_of_avernus_ward.vmdl': Defaultcourierflying;
  'models/items/furion/treant/fungal_lord_shroomthing/fungal_lord_shroomthing.vmdl': Defaultcourierflying;
  'models/items/courier/gama_brothers/gama_brothers.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/gama_brothers/gama_brothers_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/invoker/forge_spirit/iceforged_spirit/iceforged_spirit.vmdl': Defaultcourierflying;
  'models/items/furion/treant/treant_cis/treant_cis.vmdl': Defaultcourierflying;
  'models/items/courier/bucktooth_jerry/bucktooth_jerry.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/bucktooth_jerry/bucktooth_jerry_flying.vmdl': Defaultcourierflying;
  'models/items/broodmother/spiderling/perceptive_spiderling/perceptive_spiderling.vmdl': Modelsitemsbroodmotherspiderlingperceptivespiderlingperceptivespiderlingvmdl;
  'models/items/courier/dokkaebi_nexon_courier/dokkaebi_nexon_courier.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/dokkaebi_nexon_courier/dokkaebi_nexon_courier_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/invoker/forge_spirit/grievous_ingots/grievous_ingots.vmdl': Defaultcourierflying;
  'models/items/wards/eye_of_thunderkeg/eye_of_thunderkeg.vmdl': Defaultcourierflying;
  'models/items/wards/esp_eye_of_thunderkeg/esp_eye_of_thunderkeg.vmdl': Defaultcourierflying;
  'models/items/courier/green_jade_dragon/green_jade_dragon_flying.vmdl': Defaultcourierflying;
  'models/items/courier/green_jade_dragon/green_jade_dragon.vmdl': Defaultcourierflying;
  'models/items/juggernaut/ward/horse_ward/horse_ward.vmdl': Defaultcourierflying;
  'models/items/furion/treant/furion_treant_nelum_red/furion_treant_nelum_red.vmdl': Defaultcourierflying;
  'models/items/death_prophet/exorcism/dp_ghosts_jangshi_v2/dp_ghosts_jangshi_v2.vmdl': Defaultcourierflying;
  'models/items/beastmaster/boar/beast_deming/beast_deming.vmdl': Defaultcourierflying;
  'models/items/broodmother/spiderling/spiderling_dlotus_red/spiderling_dlotus_red.vmdl': Modelsitemsbroodmotherspiderlingspiderlingdlotusredspiderlingdlotusredvmdl;
  'models/items/juggernaut/ward/healing_gills_of_the_lost_isles/healing_gills_of_the_lost_isles.vmdl': Default2;
  'models/creeps/nian/nian.vmdl': Default2;
  'models/creeps/nian/nian_creep.vmdl': Default2;
  'models/items/courier/vaal_the_animated_constructdire/vaal_the_animated_constructdire.vmdl': Defaultcourierflying;
  'models/items/courier/vaal_the_animated_constructdire/vaal_the_animated_constructdire_flying.vmdl': Defaultcourierflying;
  'models/items/courier/vaal_the_animated_constructradiant/vaal_the_animated_constructradiant.vmdl': Defaultcourierflying;
  'models/items/courier/vaal_the_animated_constructradiant/vaal_the_animated_constructradiant_flying.vmdl': Defaultcourierflying;
  'models/items/courier/shroomy/shroomy.vmdl': Defaultcourierflying;
  'models/items/courier/shroomy/shroomy_flying.vmdl': Defaultcourierflying;
  'models/items/courier/blue_lightning_horse/blue_lightning_horse.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/blue_lightning_horse/blue_lightning_horse_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/courier_faun/courier_faun.vmdl': Defaultcourierflying;
  'models/items/courier/courier_faun/courier_faun_flying.vmdl': Defaultcourierflying;
  'models/items/courier/courier_janjou/courier_janjou_flying.vmdl': Defaultcourierflying;
  'models/items/courier/courier_janjou/courier_janjou.vmdl': Defaultcourierflying;
  'models/items/death_prophet/exorcism/outland_witchs_spirits/outland_witchs_spirits.vmdl': Defaultcourierflying;
  'models/items/pugna/ward/nether_grandmasters_ward/nether_grandmasters_ward.vmdl': Defaultcourierflying;
  'models/items/wards/ward_bramble_snatch/ward_bramble_snatch.vmdl': Defaultcourierflying;
  'models/items/invoker/forge_spirit/arsenal_magus_forged_spirit/arsenal_magus_forged_spirit.vmdl': Defaultcourierflying;
  'models/items/wards/ward_clockwerk_watcher/ward_clockwerk_watcher.vmdl': Defaultcourierflying;
  'models/items/courier/billy_bounceback/billy_bounceback_flying.vmdl': Defaultcourierflying;
  'models/items/courier/billy_bounceback/billy_bounceback.vmdl': Defaultcourierflying;
  'models/items/furion/treant/eternalseasons_treant/eternalseasons_treant.vmdl': Defaultcourierflying;
  'models/items/beastmaster/boar/fotw_wolf/fotw_wolf.vmdl': Defaultcourierflying;
  'models/items/courier/pw_zombie/pw_zombie.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/items/courier/pw_zombie/pw_zombie_flying.vmdl': Modelsheroesbrewmasterbrewmasterearthspiritvmdl;
  'models/items/wards/deadwatch_ward/deadwatch_ward.vmdl': Defaultcourierflying;
  'models/items/beastmaster/hawk/fotw_eagle/fotw_eagle.vmdl': Defaultcourierflying;
  'models/items/wards/deep_observer/deep_observer.vmdl': Defaultcourierflying;
  'models/items/rattletrap/cog_tesla/cog_tesla.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/wards/knightstatue_ward/knightstatue_ward.vmdl': Defaultcourierflying;
  'models/items/courier/corsair_ship/corsair_ship_flying.vmdl': Defaultcourierflying;
  'models/items/courier/corsair_ship/corsair_ship.vmdl': Defaultcourierflying;
  'models/items/courier/snaggletooth_red_panda/snaggletooth_red_panda_flying.vmdl': Defaultcourierflying;
  'models/items/courier/snaggletooth_red_panda/snaggletooth_red_panda.vmdl': Defaultcourierflying;
  'models/items/invoker/forge_spirit/sempiternal_revelations_forged_spirits/sempiternal_revelations_forged_spirits.vmdl': Defaultcourierflying;
  'models/items/rattletrap/clockmaster_cog/clockmaster_cog.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/wards/esl_one_jagged_vision/esl_one_jagged_vision.vmdl': Defaultcourierflying;
  'models/courier/skippy_parrot/skippy_parrot.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/courier/skippy_parrot/skippy_parrot_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/courier/skippy_parrot/skippy_parrot_flying_rowboat.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/courier/skippy_parrot/skippy_parrot_flying_sailboat.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/furion/treant/shroomling_treant/shroomling_treant.vmdl': Defaultcourierflying;
  'models/items/wards/monty_ward/monty_ward.vmdl': Defaultcourierflying;
  'models/items/courier/babka_bewitcher/babka_bewitcher.vmdl': Defaultcourierflying;
  'models/items/courier/babka_bewitcher/babka_bewitcher_flying.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/courier/babka_bewitcher_blue/babka_bewitcher_blue.vmdl': Defaultcourierflying;
  'models/items/courier/babka_bewitcher_blue/babka_bewitcher_blue_flying.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/wards/dragon_ward/dragon_ward.vmdl': Defaultcourierflying;
  'models/items/courier/beaverknight/beaverknight.vmdl': Defaultcourierflying;
  'models/items/courier/beaverknight/beaverknight_flying.vmdl': Defaultcourierflying;
  'models/items/courier/beaverknight_s1/beaverknight_s1.vmdl': Defaultcourierflying;
  'models/items/courier/beaverknight_s1/beaverknight_s1_flying.vmdl': Defaultcourierflying;
  'models/items/courier/beaverknight_s2/beaverknight_s2.vmdl': Defaultcourierflying;
  'models/items/courier/beaverknight_s2/beaverknight_s2_flying.vmdl': Defaultcourierflying;
  'models/items/courier/raiq/raiq_flying.vmdl': Defaultcourierflying;
  'models/items/courier/raiq/raiq.vmdl': Defaultcourierflying;
  'models/items/courier/teron/teron.vmdl': Defaultcourierflying;
  'models/items/courier/teron/teron_flying.vmdl': Defaultcourierflying;
  'models/items/lycan/ultimate/thegreatcalamityti4/thegreatcalamityti4.vmdl': Defaultcourierflying;
  'models/items/lone_druid/bear/iron_claw_spirit_bear/iron_claw_spirit_bear.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/lone_druid/true_form/iron_claw_true_form/iron_claw_true_form.vmdl': Default2;
  'models/items/venomancer/deathbringer_ward/deathbringer_ward.vmdl': Default2;
  'models/items/furion/treant/primeval_treant/primeval_treant.vmdl': Defaultcourierflying;
  'models/items/warlock/golem/ahmhedoq/ahmhedoq.vmdl': Defaultcourierflying;
  'models/items/invoker/forge_spirit/cadenza_spirit/cadenza_spirit.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/pugna/ward/tentaclesofnetherreach/tentaclesofnetherreach.vmdl': Defaultcourierflying;
  'models/items/death_prophet/exorcism/hereticenclave/hereticenclave.vmdl': Defaultcourierflying;
  'models/items/courier/scribbinsthescarab/scribbinsthescarab.vmdl': Defaultcourierflying;
  'models/items/courier/scribbinsthescarab/scribbinsthescarab_flying.vmdl': Defaultcourierflying;
  'models/items/wards/tink/tink.vmdl': Defaultcourierflying;
  'models/items/courier/snapjaw/snapjaw.vmdl': Defaultcourierflying;
  'models/items/courier/snapjaw/snapjaw_flying.vmdl': Defaultcourierflying;
  'models/items/enigma/eidolon/geodesic/geodesic.vmdl': Modelsitemsenigmaeidolongeodesicgeodesicvmdl;
  'models/items/wards/enchantedvision_ward/enchantedvision_ward.vmdl': Defaultcourierflying;
  'models/items/wards/stonebound_ward/stonebound_ward.vmdl': Defaultcourierflying;
  'models/items/shadowshaman/serpent_ward/tangki_serpent_ward/tangki_serpent_ward.vmdl': Defaultcourierflying;
  'models/items/courier/carty/carty.vmdl': Defaultcourierflying;
  'models/items/courier/carty/carty_flying.vmdl': Defaultcourierflying;
  'models/items/courier/carty_dire/carty_dire.vmdl': Defaultcourierflying;
  'models/items/courier/carty_dire/carty_dire_flying.vmdl': Defaultcourierflying;
  'models/courier/mechjaw/mechjaw.vmdl': Modelsitemsenigmaeidolongeodesicgeodesicvmdl;
  'models/items/lone_druid/bear/spirit_of_anger/spirit_of_anger.vmdl': Defaultcourierflying;
  'models/courier/mechjaw/mechjaw_flying.vmdl': Modelsitemsenigmaeidolongeodesicgeodesicvmdl;
  'models/items/lone_druid/true_form/wolf_hunter_true_form/wolf_hunter_true_form.vmdl': Modelsheroesterrorbladeterrorbladevmdl;
  'models/heroes/techies/techies.vmdl': Default2;
  'models/items/hex/sheep_hex/sheep_hex.vmdl': Default2;
  'models/heroes/techies/fx_techiesfx_stasis.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/techies/fx_techies_remotebomb.vmdl': Default2;
  'models/heroes/techies/fx_techiesfx_mine.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/items/techies/bigshot/bigshot_remotebomb.vmdl': Modelsitemstechiesbigshotbigshotremotebombvmdl;
  'models/items/techies/bigshot/fx_bigshot_stasis.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/items/techies/bigshot/fx_bigshot_mine.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/lanaya/lanaya_trap_crystal_invis.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/items/hex/sheep_hex/sheep_hex_gold.vmdl': Default2;
  'models/items/courier/bearzky/bearzky.vmdl': Defaultcourierflying;
  'models/items/courier/bearzky/bearzky_flying.vmdl': Defaultcourierflying;
  'models/items/courier/boooofus_courier/boooofus_courier.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/boooofus_courier/boooofus_courier_flying.vmdl': Defaultcourierflying;
  'models/items/furion/treant/father_treant/father_treant.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/jumo/jumo_flying.vmdl': Defaultcourierflying;
  'models/items/courier/jumo/jumo.vmdl': Defaultcourierflying;
  'models/items/courier/jumo_dire/jumo_dire.vmdl': Defaultcourierflying;
  'models/items/courier/jumo_dire/jumo_dire_flying.vmdl': Defaultcourierflying;
  'models/items/courier/basim/basim.vmdl': Defaultcourierflying;
  'models/items/courier/basim/basim_flying.vmdl': Defaultcourierflying;
  'models/heroes/oracle/oracle.vmdl': Modelsheroesterrorbladeterrorbladevmdl;
  'models/items/courier/grim_wolf/grim_wolf.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/grim_wolf/grim_wolf_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/grim_wolf_radiant/grim_wolf_radiant.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/grim_wolf_radiant/grim_wolf_flying_radiant.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/duskie/duskie.vmdl': Defaultcourierflying;
  'models/items/courier/duskie/duskie_flying.vmdl': Defaultcourierflying;
  'models/items/wards/articwatchtower/articwatchtower.vmdl': Defaultcourierflying;
  'models/items/wards/arcticwatchtower/arcticwatchtower.vmdl': Defaultcourierflying;
  'models/items/wards/handy_watcher/handy_watcher.vmdl': Defaultcourierflying;
  'models/items/courier/lilnova/lilnova.vmdl': Defaultcourierflying;
  'models/items/courier/lilnova/lilnova_flying.vmdl': Defaultcourierflying;
  'models/items/lycan/wolves/hunter_kings_wolves/hunter_kings_wolves.vmdl': Defaultcourierflying;
  'models/items/lycan/ultimate/hunter_kings_trueform/hunter_kings_trueform.vmdl': Defaultcourierflying;
  'models/items/beastmaster/boar/shrieking_razorback/shrieking_razorback.vmdl': Defaultcourierflying;
  'models/items/invoker/forge_spirit/infernus/infernus.vmdl': Defaultcourierflying;
  'models/items/tuskarr/sigil/frostborne_sigil/frostborne_sigil.vmdl': Defaultcourierflying;
  'models/items/broodmother/spiderling/thistle_crawler/thistle_crawler.vmdl': Defaultcourierflying;
  'models/items/furion/treant/ravenous_woodfang/ravenous_woodfang.vmdl': Defaultcourierflying;
  'models/items/wards/fairy_dragon/fairy_dragon.vmdl': Defaultcourierflying;
  'models/items/tuskarr/sigil/boreal_sigil/boreal_sigil.vmdl': Defaultcourierflying;
  'models/items/courier/courier_mvp_redkita/courier_mvp_redkita.vmdl': Defaultcourierflying;
  'models/items/courier/courier_mvp_redkita/courier_mvp_redkita_flying.vmdl': Defaultcourierflying;
  'models/items/rattletrap/battletrap_cog/battletrap_cog.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/juggernaut/ward/dc_wardupate/dc_wardupate.vmdl': Defaultcourierflying;
  'models/items/death_prophet/exorcism/awakened_thirst_bats/awakened_thirst_bats.vmdl': Defaultcourierflying;
  'models/items/rattletrap/warmachine_cog_dc/warmachine_cog_dc.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/venomancer/ward/acidic_ward_of_the_flytrap/acidic_ward_of_the_flytrap.vmdl': Default2;
  'models/heroes/attachto_ghost/pa_gravestone_ghost.vmdl': Default2;
  'models/items/shadowshaman/serpent_ward/true_crow_ward/true_crow_ward.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/heroes/winterwyvern/winterwyvern.vmdl': Modelsheroestuskarrtuskarrvmdl;
  'models/courier/ram/ram.vmdl': Default2;
  'models/courier/ram/ram_flying.vmdl': Default2;
  'models/items/shadowshaman/serpent_ward/dotapit_s3_wild_tempest_wards/dotapit_s3_wild_tempest_wards.vmdl': Defaultcourierflying;
  'models/items/courier/sltv_10_courier/sltv_10_courier.vmdl': Defaultcourierflying;
  'models/items/courier/sltv_10_courier/sltv_10_courier_flying.vmdl': Defaultcourierflying;
  'models/items/lycan/ultimate/ambry_true_form/ambry_true_form.vmdl': Defaultcourierflying;
  'models/items/lycan/wolves/ambry_summon/ambry_summon.vmdl': Defaultcourierflying;
  'models/items/wards/watcher_below_ward/watcher_below_ward.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/terrorblade/corrupted_form/corrupted_form.vmdl': Modelsheroesterrorbladedemonvmdl;
  'models/items/pugna/ward/draining_wight/draining_wight.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/courier/baby_winter_wyvern/baby_winter_wyvern.vmdl': Default2;
  'models/courier/baby_winter_wyvern/baby_winter_wyvern_flying.vmdl': Default2;
  'models/heroes/arc_warden/arc_warden.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/tuskarr/sigil/glaciomarine_sigil/glaciomarine_sigil.vmdl': Defaultcourierflying;
  'models/items/wards/jimoward_omij/jimoward_omij.vmdl': Defaultcourierflying;
  'models/items/dragon_knight/fireborn_dragon/fireborn_dragon.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/broodmother/spiderling/lycosidae_spiderling/lycosidae_spiderling.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/broodmother/spiderling/virulent_matriarchs_spiderling/virulent_matriarchs_spiderling.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/courier/venoling/venoling.vmdl': Defaultcourierflying;
  'models/courier/venoling/venoling_flying.vmdl': Defaultcourierflying;
  'models/courier/huntling/huntling.vmdl': Defaultcourierflying;
  'models/courier/huntling/huntling_flying.vmdl': Defaultcourierflying;
  'models/courier/mech_donkey/mech_donkey.vmdl': Defaultcourierflying;
  'models/courier/mech_donkey/mech_donkey_flying.vmdl': Defaultcourierflying;
  'models/courier/flopjaw/flopjaw.vmdl': Defaultcourierflying;
  'models/courier/flopjaw/flopjaw_flying.vmdl': Defaultcourierflying;
  'models/items/courier/chocobo/chocobo.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/courier/chocobo/chocobo_flying.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/dragon_knight/oblivion_blazer_dragon/oblivion_blazer_dragon.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/invoker/forge_spirit/dark_sorcerer_forge_spirit/dark_sorcerer_forge_spirit.vmdl': Defaultcourierflying;
  'models/items/witchdoctor/wd_ward/ribbitar_ward/ribbitar_ward.vmdl': Modelsheroeswitchdoctorwitchdoctorwardvmdl;
  'models/items/terrorblade/endless_purgatory_demon/endless_purgatory_demon.vmdl': Modelsheroesterrorbladedemonvmdl;
  'models/props_structures/radiant_tower002.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/props_structures/radiant_statue001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/radiant_statue002.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/radiant_melee_barracks001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/radiant_ranged_barracks001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/radiant_ancient001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/radiant_fountain002.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/dire_tower002.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/props_structures/dire_statue001.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/props_structures/dire_statue002.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/dire_column001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/dire_barracks_melee001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/dire_barracks_ranged001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/props_structures/dire_ancient_base001.vmdl': Modelspropsstructuresradiantstatue001vmdl;
  'models/heroes/zeus/zeus_arcana.vmdl': Modelsheroeszeuszeusarcanavmdl;
  'models/props_structures/mesh/dire_tower002_destruction_001.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/props_structures/mesh/dire_tower002_destruction_002.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/courier/weta_automaton/weta_automaton.vmdl': Modelsheroeszeuszeusarcanavmdl;
  'models/items/terrorblade/marauders_demon/marauders_demon.vmdl': Modelsheroesterrorbladedemonvmdl;
  'models/items/dragon_knight/dragon_immortal_1/dragon_immortal_1.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/lone_druid/bear/dark_wood_bear/dark_wood_bear.vmdl': Modelsheroesmiranamiranavmdl;
  'models/items/lone_druid/true_form/dark_wood_true_form/dark_wood_true_form.vmdl': Modelsheroesmiranamiranavmdl;
  'models/trophies/mesh/aegis_shield1.vmdl': Modelsheroeszeuszeusarcanavmdl;
  'models/courier/beetlejaws/mesh/beetlejaws.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/courier/beetlejaws/mesh/beetlejaws_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/heroes/monkey_king/monkey_king.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_b.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/heroes/weaver/weaver_bug.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/weaver/weaver_immortal_head_ti7/weaver_bug_ti7.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/courier/donkey_ti7/donkey_ti7.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/courier/donkey_ti7/donkey_ti7_flying.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_gameplay/banana_prop_closed.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_gameplay/banana_prop_open.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_gameplay/rune_doubledamage01.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/rune_haste01.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/rune_illusion01.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/rune_invisibility01.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/rune_regeneration01.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/rune_goldxp.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/tango.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/branch.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/tpscroll01.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/salve.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/clarity.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/aegis.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/cheese.vmdl': Modelspropsgameplaycheesevmdl;
  'models/heroes/monkey_king/transform_invisiblebox.vmdl': Modelsheroesmonkeykingtransforminvisibleboxvmdl;
  'models/heroes_staging/demon_artist/demon_artist.vmdl': Modelsheroesstagingdemonartistdemonartistvmdl;
  'models/heroes/dark_willow/dark_willow.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/pangolier/pangolier.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/heroes/pangolier/pangolier_gyroshell.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/heroes/pangolier/pangolier_gyroshell2.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/items/techies/ti8_techies_subterranean_sapper_squad_bomb/ti8_techies_subterranean_sapper_squad_bomb.vmdl': Default2;
  'models/items/wraith_king/wk_ti8_creep/wk_ti8_creep.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/heroes/grimstroke/grimstroke.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/heroes/grimstroke/ink_phantom.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/heroes/mars/mars.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/heroes/clinkz/clinkz_archer.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/rubick/rubick_arcana/rubick_arcana_base.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/lone_druid/spirit_bear_rubick.vmdl': Default2;
  'models/heroes/warlock/warlock_demon_rubick.vmdl': Default2;
  'models/heroes/lycan/lycan_wolf_rubick.vmdl': Default2;
  'models/heroes/undying/undying_flesh_golem_rubick.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/phoenix/phoenix_egg_rubick.vmdl': Modelsheroesbountyhunterbountyhuntervmdl;
  'models/heroes/techies/fx_techies_remotebomb_rubick.vmdl': Default2;
  'models/heroes/shadowshaman/shadowshaman_totem_rubick.vmdl': Default2;
  'models/items/rattletrap/battletrap_cog/battletrap_cog_rubick.vmdl': Modelsheroesphantomassassinphantomassassinvmdl;
  'models/items/rubick/rubick_arcana/rubick_arcana_cube_pangolier.vmdl': Modelspropsgameplayrunedoubledamage01vmdl;
  'models/props_gameplay/consumable_drums.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/props_structures/radiant_tower002.vmdl+models/props_structures/rock_golem/tower_radiant_rock_golem.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/props_structures/dire_tower002.vmdl+models/props_structures/rock_golem/tower_dire_rock_golem.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/axe/ti9_jungle_axe/axe_bare.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl1/courier_ti9_lvl1.vmdl': Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl1/courier_ti9_lvl1_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl2/courier_ti9_lvl2.vmdl': Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl2/courier_ti9_lvl2_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl3/courier_ti9_lvl3.vmdl': Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl3/courier_ti9_lvl3_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl4/courier_ti9_lvl4.vmdl': Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl4/courier_ti9_lvl4_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl5/courier_ti9_lvl5.vmdl': Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl5/courier_ti9_lvl5_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl6/courier_ti9_lvl6.vmdl': Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl6/courier_ti9_lvl6_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl7/courier_ti9_lvl7.vmdl': Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl;
  'models/items/courier/courier_ti9/courier_ti9_lvl7/courier_ti9_lvl7_flying.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/courier/baby_rosh/babyroshan_alt.vmdl': Default2;
  'models/courier/baby_rosh/babyroshan_alt_flying.vmdl': Default2;
  'models/items/warlock/golem/ti9_cache_warlock_tribal_warlock_golem/ti9_cache_warlock_tribal_golem_alt.vmdl': Modelsitemswarlockgolemti9cachewarlocktribalwarlockgolemti9cachewarlocktribalgolemaltvmdl;
  'models/heroes/invoker_kid/invoker_kid.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/heroes/invoker_kid/invoker_kid_trainer_dragon.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/clinkz/clinkz_ti9_immortal_weapon/clinkz_ti9_immortal_army.vmdl': Modelspropsstructuresmeshdiretower002destruction001vmdl;
  'models/items/tiny/glacial/glacial_tiny01.vmdl': Default2;
  'models/items/tiny/glacial/glacial_tiny02.vmdl': Default2;
  'models/items/tiny/glacial/glacial_tiny03.vmdl': Default2;
  'models/items/tiny/glacial/glacial_tiny04.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/tiny/scarlet_quarry/scarlet_quarry01.vmdl': Default2;
  'models/items/tiny/scarlet_quarry/scarlet_quarry_02.vmdl': Default2;
  'models/items/tiny/scarlet_quarry/scarlet_quarry_03.vmdl': Default2;
  'models/items/tiny/scarlet_quarry/scarlet_quarry_04.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/tiny/burning_stone_giant/burning_stone_giant_01.vmdl': Default2;
  'models/items/tiny/burning_stone_giant/burning_stone_giant_02.vmdl': Default2;
  'models/items/tiny/burning_stone_giant/burning_stone_giant_03.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/tiny/burning_stone_giant/burning_stone_giant_04.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/items/tiny/tiny_prestige/tiny_prestige_lvl_01.vmdl': Default2;
  'models/items/tiny/tiny_prestige/tiny_prestige_lvl_02.vmdl': Default2;
  'models/items/tiny/tiny_prestige/tiny_prestige_lvl_03.vmdl': Default2;
  'models/items/tiny/tiny_prestige/tiny_prestige_lvl_04.vmdl': ModelsheroesabyssalunderlordabyssalunderlordV2vmdl;
  'models/heroes/snapfire/snapfire.vmdl': Modelsheroespudgecutepudgecutevmdl;
  'models/heroes/void_spirit/void_spirit.vmdl': Modelsheroesvoidspiritvoidspiritvmdl;
  'models/props_structures/outpost.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/tiny/frozen_stonehenge/frozen_stonehenge_lvl_01.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/tiny/frozen_stonehenge/frozen_stonehenge_lvl_02.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/tiny/frozen_stonehenge/frozen_stonehenge_lvl_03.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/tiny/frozen_stonehenge/frozen_stonehenge_lvl_04.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/props_gameplay/dummy/dummy.vmdl': Modelspropsgameplaydummydummyvmdl;
  'models/props_consumables/disco_ball/ti10_consumable_disco_ball.vmdl': Modelsheroespudgecutepudgecutevmdl;
  'models/items/wraith_king/arcana/wraith_king_arcana.vmdl': Modelsheroespudgecutepudgecutevmdl;
  'models/items/wraith_king/arcana/wk_arcana_skeleton.vmdl': Modelsheroespudgecutepudgecutevmdl;
  'models/props_structures/dire_tower002.vmdl+models/items/world/towers/ti10_dire_tower/ti10_dire_tower_model_editor.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/props_structures/radiant_tower002.vmdl+models/items/world/towers/ti10_radiant_tower/ti10_radiant_tower_model_editor.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl1/courier_ti10_radiant_lvl1.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl2/courier_ti10_radiant_lvl2.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl3/courier_ti10_radiant_lvl3.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl4/courier_ti10_radiant_lvl4.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl5/courier_ti10_radiant_lvl5.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl6/courier_ti10_radiant_lvl6.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl7/courier_ti10_radiant_lvl7.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl1/courier_ti10_radiant_lvl1_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl2/courier_ti10_radiant_lvl2_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl3/courier_ti10_radiant_lvl3_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl4/courier_ti10_radiant_lvl4_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl5/courier_ti10_radiant_lvl5_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl6/courier_ti10_radiant_lvl6_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_radiant/courier_ti10_radiant_lvl7/courier_ti10_radiant_lvl7_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl1/courier_ti10_dire_lvl1.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl2/courier_ti10_dire_lvl2.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl3/courier_ti10_dire_lvl3.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl4/courier_ti10_dire_lvl4.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl5/courier_ti10_dire_lvl5.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl6/courier_ti10_dire_lvl6.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl7/courier_ti10_dire_lvl7.vmdl': Modelsitemscouriercourierti10radiantcourierti10radiantvmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl1/courier_ti10_dire_lvl1_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl2/courier_ti10_dire_lvl2_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl3/courier_ti10_dire_lvl3_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl4/courier_ti10_dire_lvl4_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl5/courier_ti10_dire_lvl5_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/courier/courier_ti10_dire/courier_ti10_dire_lvl6/courier_ti10_dire_lvl6_flying.vmdl': Modelspropsstructuresradianttower002vmdl;
  'models/items/tiny/tiny_bad_to_the_bone_shoulder/tiny_bad_to_the_bone_shoulder.vmdl': Modelsitemstinytinybadtotheboneshouldertinybadtotheboneshouldervmdl;
  'models/items/tiny/tiny_bad_to_the_bone_belt/tiny_bad_to_the_bone_belt.vmdl': Modelsitemstinytinybadtotheboneshouldertinybadtotheboneshouldervmdl;
  'models/items/tiny/tiny_bad_to_the_bone_neck/tiny_bad_to_the_bone_neck.vmdl': Modelsitemstinytinybadtotheboneshouldertinybadtotheboneshouldervmdl;
  'models/items/tiny/tiny_bad_to_the_bone_back/tiny_bad_to_the_bone_back.vmdl': Modelsitemstinytinybadtotheboneshouldertinybadtotheboneshouldervmdl;
}
interface Modelsitemstinytinybadtotheboneshouldertinybadtotheboneshouldervmdl {
  cameras: Cameras4;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
}
interface Cameras4 {
  Default: Default;
}
interface Modelsitemscouriercourierti10radiantcourierti10radiantvmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundModel: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
  PortraitPlayIdleExpression: string;
}
interface Modelspropsgameplaydummydummyvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitParticle: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitPlayIdleExpression: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelsheroesvoidspiritvoidspiritvmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
  SummonPosition: string;
  PortraitPlayIdleExpression: string;
}
interface Modelsitemswarlockgolemti9cachewarlocktribalwarlockgolemti9cachewarlocktribalgolemaltvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitLightScale: string;
  PortraitAmbientDirection: string;
  cameras: Cameras2;
  SummonCount: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelsitemscouriercourierti9courierti9lvl1courierti9lvl1vmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundModel: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelsheroesstagingdemonartistdemonartistvmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelsheroesmonkeykingtransforminvisibleboxvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelspropsgameplaycheesevmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelspropsgameplayrunedoubledamage01vmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelspropsstructuresmeshdiretower002destruction001vmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitAnimationActivity: string;
  PortraitDesaturateHero: string;
}
interface Modelsheroeszeuszeusarcanavmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
}
interface Modelspropsstructuresradiantstatue001vmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
}
interface Modelspropsstructuresradianttower002vmdl {
  cameras: Cameras3;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitAnimationActivity: string;
  PortraitDesaturateHero: string;
  PortraitPlayIdleExpression: string;
}
interface Modelsitemstechiesbigshotbigshotremotebombvmdl {
  PortraitFOV: string;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsitemsenigmaeidolongeodesicgeodesicvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsitemsbroodmotherspiderlingspiderlingdlotusredspiderlingdlotusredvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitParticle: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  cameras: Cameras;
}
interface Modelsitemsbroodmotherspiderlingperceptivespiderlingperceptivespiderlingvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitParticle: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitLightScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
}
interface Modelsheroesterrorbladedemonvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroesterrorbladeterrorbladevmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsitemswardsf2pwardf2pwardvmdl {
  PortraitPosition: string;
  PortraitLookAt: string;
  PortraitFOV: string;
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
}
interface Modelscourierdoomdemiherocourierdoomdemiherocouriervmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  PortraitBackgroundModel: string;
  cameras: Cameras;
}
interface Modelspropsstructuresdirefountain002vmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
}
interface Modelscreepsneutralcreepsncreepkoboldkoboldancreepkoboldavmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  PortraitBackgroundModel: string;
  cameras: Cameras2;
}
interface Modelsheroeseldertitanancestralspiritvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor3: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroestuskarrtuskarrvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor3: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroesphantomassassinphantomassassinvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  cameras: Cameras;
}
interface Modelsheroesqueenofpainqueenofpain2vmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroesjuggernautjuggernautvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
}
interface Modelsheroeswitchdoctorwitchdoctorwardvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  cameras: Cameras3;
}
interface Cameras3 {
  Default: Default3;
}
interface Modelsheroesslarkslarkvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitParticle: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
}
interface Modelsheroesstormspiritstormspiritvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitParticle: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroespudgecutepudgecutevmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitPlayIdleExpression: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelsheroesmiranamiranavmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
}
interface Modelsheroesbrewmasterbrewmasterearthspiritvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroeschenchenvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitParticle: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroesbountyhunterbountyhuntervmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitParticle: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Modelsheroesantimagefemaleantimagefemalevmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitLightScale: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitPlayIdleExpression: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
  cameras: Cameras2;
  SummonPosition: string;
  SummonAngles: string;
}
interface ModelsheroesabyssalunderlordabyssalunderlordV2vmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras2;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitHideParticles: string;
  PortraitHideDropShadow: string;
  PortraitDesaturateParticles: string;
  PortraitDesaturateHero: string;
}
interface Modelsheroesabaddonabaddonvmdl {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Defaultcourierflying {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitLightScale: string;
  PortraitAmbientDirection: string;
  cameras: Cameras2;
}
interface Defaultward {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundModel: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Defaultentityreplacement {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitSpecularDirection: string;
  PortraitSpecularPower: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundModel: string;
  PortraitAnimationActivity: string;
  PortraitAnimationCycle: string;
  PortraitAnimationRate: string;
  PortraitHideHero: string;
  PortraitLightScale: string;
  PortraitAmbientDirection: string;
  cameras: Cameras2;
}
interface Cameras2 {
  default: Default3;
}
interface Default3 {
  PortraitPosition: string;
  PortraitAngles: string;
  PortraitFOV: string;
  PortraitFar: string;
}
interface Default2 {
  PortraitLightPosition: string;
  PortraitLightAngles: string;
  PortraitLightFOV: string;
  PortraitLightDistance: string;
  PortraitLightColor: string;
  PortraitShadowColor: string;
  PortraitShadowScale: string;
  PortraitAmbientColor: string;
  PortraitAmbientScale: string;
  PortraitSpecularColor: string;
  PortraitBackgroundTexture: string;
  PortraitBackgroundColor1: string;
  PortraitBackgroundColor2: string;
  PortraitBackgroundColor3: string;
  PortraitBackgroundColor4: string;
  PortraitLightScale: string;
  PortraitGroundShadowScale: string;
  PortraitAmbientDirection: string;
  PortraitAnimationActivity: string;
  cameras: Cameras;
}
interface Cameras {
  default: Default;
}
interface Default {
  PortraitPosition: string;
  PortraitAngles: string;
  PortraitFOV: string;
}
interface Particlepoints {
  particle_1_1: Particle11;
  particle_1_2: Particle11;
  particle_1_3: Particle11;
  particle_1_4: Particle11;
  particle_1_5: Particle11;
  particle_1_6: Particle11;
  particle_1_7: Particle11;
  particle_2_1: Particle11;
  particle_2_2: Particle11;
  particle_2_3: Particle11;
  particle_2_4: Particle11;
  particle_2_5: Particle11;
  particle_2_6: Particle11;
  particle_2_7: Particle11;
  particle_2_8: Particle11;
  particle_2_9: Particle11;
  particle_3_1: Particle11;
  particle_3_2: Particle11;
  particle_3_3: Particle11;
  particle_3_4: Particle11;
  particle_3_5: Particle35;
  particle_4_1: Particle11;
  particle_4_2: Particle11;
  particle_4_3: Particle11;
  particle_5_1: Particle11;
  particle_5_2: Particle11;
  particle_5_3: Particle11;
  particle_5_4: Particle11;
  particle_5_5: Particle11;
  particle_5_6: Particle11;
  particle_5_7: Particle11;
  particle_5_8: Particle11;
  particle_5_9: Particle11;
  particle_5_10: Particle11;
  particle_5_11: Particle11;
  wg_401: Wg401;
}
interface Wg401 {
  name: string;
  attach_type: string;
}
interface Particle35 {
  name: string;
  level: string;
  attach_type: string;
  control_points: Controlpoints;
}
interface Controlpoints {
  '0': _0;
}
interface _0 {
  control_point_index: string;
  attach_type: string;
  attachment: string;
}
interface Particle11 {
  name: string;
  level: string;
  attach_type: string;
}
interface Npcunitscustom {
  '#base': string;
  DOTAUnits: DOTAUnits;
}
interface DOTAUnits {
  npc_tka_creep_radiant: Npctkacreepradiant;
}
interface Npctkacreepradiant {
  BaseClass: string;
  Model: string;
  SoundSet: string;
  ModelScale: string;
  Level: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  AttackCapabilities: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackDamageType: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  AttributePrimary: string;
  AttributeBaseStrength: string;
  AttributeStrengthGain: string;
  AttributeBaseIntelligence: string;
  AttributeIntelligenceGain: string;
  AttributeBaseAgility: string;
  AttributeAgilityGain: string;
  BountyXP: string;
  BountyGoldMin: string;
  BountyGoldMax: string;
  BoundsHullName: string;
  RingRadius: string;
  HealthBarOffset: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  TeamName: string;
  CombatClassAttack: string;
  CombatClassDefend: string;
  UnitRelationshipClass: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  vscripts: string;
}
interface Npcitemscustom {
  '#base': string;
  DOTAAbilities: DOTAAbilities2;
}
interface DOTAAbilities2 {
  item_tpscroll: Itemtpscroll;
}
interface Itemtpscroll {
  BaseClass: string;
  ID: string;
}
interface Npcheroescustom {
  npc_tka_hero_commander: Npctkaherocommander;
}
interface Npctkaherocommander {
  override_hero: string;
  Model: string;
  ModelScale: string;
  DisableWearables: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability8: string;
  Ability9: string;
  Ability10: string;
  Ability11: string;
  Ability12: string;
  Ability13: string;
  Ability14: string;
  Ability15: string;
  Ability16: string;
  Ability17: string;
  Ability18: string;
  Ability19: string;
  Ability20: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  AttackCapabilities: string;
  BaseAttackSpeed: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackDamageType: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackAcquisitionRange: string;
  AttackRange: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  AttributePrimary: string;
  AttributeBaseStrength: string;
  AttributeStrengthGain: string;
  AttributeBaseIntelligence: string;
  AttributeIntelligenceGain: string;
  AttributeBaseAgility: string;
  AttributeAgilityGain: string;
  BountyXP: string;
  BountyGoldMin: string;
  BountyGoldMax: string;
  BoundsHullName: string;
  RingRadius: string;
  MovementCapabilities: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  HasAggressiveStance: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  StatusHealthRegen: string;
  TeamName: string;
  CombatClassAttack: string;
  CombatClassDefend: string;
  UnitRelationshipClass: string;
  VisionDaytimeRange: string;
  VisionNighttimeRange: string;
  HasInventory: string;
}
interface Npcabilitiescustom {
  '#base': string;
  DOTAAbilities: DOTAAbilities;
}
interface DOTAAbilities {
}
interface Items {
  item_tie_jian: Itemtiejian;
  item_chang_gong: Itemchanggong;
  item_xian_cao: Itemxiancao;
  item_jing_shi: Itemjingshi;
  item_ren_shen: Itemrenshen;
  item_tie_kui: Itemtiekui;
  item_chang_pao: Itemchangpao;
  item_mo_zhang: Itemmozhang;
  item_xie_zhua: Itemxiezhua;
  item_e_lai_tie_ji: Itemelaitieji;
  item_fei_tian_hu_zhua: Itemfeitianhuzhua;
  item_luo_ri_gong: Itemluorigong;
  item_li_bie_jian: Itemlibiejian;
  item_zhen_hun_hei_pao: Itemzhenhunheipao;
  item_ren_wang_dun: Itemrenwangdun;
  item_wang_zuo_quan_zhang: Itemwangzuoquanzhang;
  item_qi_zuo_yu_pei: Itemqizuoyupei;
  item_qing_nang_shu: Itemqingnangshu;
  item_liu_xing_gong: Itemliuxinggong;
  item_gu_ding_dao: Itemgudingdao;
  item_wen_tian_qiang: Itemwentianqiang;
  item_guan_shi_fu: Itemguanshifu;
  item_zhang_ba_she_mao: Itemzhangbashemao;
  item_qing_gang_jian: Itemqinggangjian;
  item_ci_xiong_shuang_gu_jian: Itemcixiongshuanggujian;
  item_si_shen_lian_dao: Itemsishenliandao;
  item_zhan_bing_yin_kai_jia: Itemzhanbingyinkaijia;
  item_bai_yin_shi_zi: Itembaiyinshizi;
  item_fang_tian_hua_ji: Itemfangtianhuaji;
  item_qing_long_yan_yue_dao: Itemfeitianhuzhua;
  item_yi_tian_jian: Itemyitianjian;
  item_chuan_guo_yu_xi: Itemchuanguoyuxi;
  item_qi_xing_deng: Itemqixingdeng;
  item_jiao_wei_qin: Itemjiaoweiqin;
  item_tai_ping_yao_shu: Itemtaipingyaoshu;
  item_dun_jia_tian_shu: Itemdunjiatianshu;
}
interface Itemdunjiatianshu {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues61;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues61 {
  mana_pct: string;
  magical_resistance: string;
}
interface Itemtaipingyaoshu {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues60;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues60 {
  duration: string;
  mana_pct: string;
}
interface Itemjiaoweiqin {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues59;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues59 {
  spell_steal: string;
  radius: string;
  spell_damage: string;
  duration: string;
  attack: string;
}
interface Itemqixingdeng {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues58;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues58 {
  hp_pct: string;
  radius: string;
  buff_hp_regen: string;
  buff_magical_resist: string;
  duration: string;
  magical_resistance: string;
  hp_regen: string;
}
interface Itemchuanguoyuxi {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues57;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues57 {
  radius: string;
  damage: string;
  hp_pct_bonus: string;
  hp_regen: string;
}
interface Itemyitianjian {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues56;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues56 {
  hp_pct: string;
  duration: string;
  attack: string;
  magical_resistance: string;
}
interface Itemfangtianhuaji {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues55;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues55 {
  life_steal: string;
  hp_pct: string;
  buff_steal: string;
  duration: string;
  attack: string;
}
interface Itembaiyinshizi {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues54;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues54 {
  hp_pct: string;
  duration: string;
  damage_reduce: string;
  armor: string;
}
interface Itemzhanbingyinkaijia {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues53;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues53 {
  ally_armor: string;
  enemy_armor: string;
  radius: string;
  armor: string;
}
interface Itemsishenliandao {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues52;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues52 {
  spell_damage: string;
  spell_steal: string;
}
interface Itemcixiongshuanggujian {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues51;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues51 {
  heal_bonus: string;
  attack: string;
}
interface Itemqinggangjian {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues50;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues50 {
  armor: string;
  duration: string;
  attack: string;
}
interface Itemzhangbashemao {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues49;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues49 {
  radius: string;
  damage_pct: string;
  attack: string;
}
interface Itemguanshifu {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues28;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface Itemwentianqiang {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues48;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues48 {
  melee_chance: string;
  range_chance: string;
  duration: string;
  attack: string;
}
interface Itemgudingdao {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues47;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues47 {
  chance: string;
  damage_pct: string;
  attack: string;
}
interface Itemliuxinggong {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues46;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues46 {
  range_bonus: string;
  attack_pct: string;
  attack_speed: string;
}
interface Itemqingnangshu {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues45;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues45 {
  aura_regen: string;
  radius: string;
  hp_regen: string;
}
interface Itemqizuoyupei {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues44;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues44 {
  cd_reduce: string;
  mana_pct: string;
}
interface Itemwangzuoquanzhang {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues43;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues43 {
  damage: string;
  mana_pct: string;
}
interface Itemrenwangdun {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues42;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues42 {
  chance: string;
  block_damage_ranged: string;
  block_damage_melee: string;
  armor: string;
}
interface Itemzhenhunheipao {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues41;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues41 {
  magical_resistance: string;
  hp: string;
}
interface Itemlibiejian {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues40;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues40 {
  chance: string;
  attack_speed: string;
}
interface Itemluorigong {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues39;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues39 {
  chance: string;
  jump: string;
  damage: string;
  attack_speed: string;
}
interface Itemfeitianhuzhua {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues38;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues38 {
  chance: string;
  crit_pct: string;
  attack: string;
}
interface Itemelaitieji {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues37;
  RandomCombos: string;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues37 {
  attack: string;
  armor: string;
  attack_speed: string;
}
interface Itemxiezhua {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues36;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues36 {
  life_steal: string;
}
interface Itemmozhang {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues35;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues35 {
  spell_damage: string;
}
interface Itemchangpao {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues34;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues34 {
  magical_resistance: string;
}
interface Itemtiekui {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues33;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues33 {
  armor: string;
}
interface Itemrenshen {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues32;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues32 {
  hp: string;
}
interface Itemjingshi {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues31;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues31 {
  mana_pct: string;
}
interface Itemxiancao {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues30;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues30 {
  hp_regen: string;
}
interface Itemchanggong {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues29;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues29 {
  attack_speed: string;
}
interface Itemtiejian {
  Star: string;
  Zhuanshu: string;
  AbilityCooldown: string;
  AbilityValues: AbilityValues28;
  BaseClass: string;
  ID: string;
  AbilityBehavior: string;
  AbilityTextureName: string;
  ScriptFile: string;
  Model: string;
  Effect: string;
}
interface AbilityValues28 {
  attack: string;
}
interface Herolist {
  npc_dota_hero_phoenix: string;
}
interface Combos {
  ying_ming: Yingming;
  shen_she: Shenshe;
  dan_tiao: Dantiao;
  ye_xin: Yexin;
  shui_zhan: Shuizhan;
  chi_mu: Chimu;
  jiang_cai: Jiangcai;
  tu_xi: Tuxi;
  hu_wei: Huwei;
  zhi_nang: Zhinang;
  bu_qu: Buqu;
  jin_guo: Jinguo;
  hou_qin: Houqin;
  huo_gong: Huogong;
  ji_xing: Shuizhan;
  shun_xiang: Shunxiang;
  huan_shu: Zhinang;
  cui_qiang: Cuiqiang;
  gu_shou: Gushou;
  shi_yun: Shiyun;
  tie_ji: Tieji;
  wang_zuo: Wangzuo;
  yi_shu: Wangzuo;
  qiang_yun: Qiangyun;
  bao_en: Baoen;
  e_ming: Eming;
  zao_shi: Zaoshi;
  jiu_feng: Jiufeng;
  wu_mou: Wumou;
  tan_lan: Tanlan;
  jian_xiong: Zhinang;
  qing_cheng: Zhinang;
  ren_cai: Zhinang;
  wu_sheng: Zhinang;
  xian_ren: Zhinang;
}
interface Tanlan {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues27;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues27 {
  xu_yao: string;
  shang_hai: string;
  jin_bi: string;
}
interface Wumou {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues26;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues26 {
  xu_yao: string;
  hui_lan: string;
}
interface Jiufeng {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues25;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues25 {
  xu_yao: string;
  gong_ji_li: string;
  ming_zhong: string;
}
interface Zaoshi {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues24;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues24 {
  xu_yao: string;
  yu_zhi: string;
  ti_sheng: string;
}
interface Eming {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues23;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues23 {
  xu_yao: string;
  hu_jia: string;
  lve_duo: string;
  gai_lv: string;
}
interface Baoen {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues22;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues22 {
  xu_yao: string;
  hu_dun: string;
  chi_xu: string;
  shu_liang: string;
}
interface Qiangyun {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues21;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues21 {
  xu_yao: string;
  jian_mian: string;
}
interface Wangzuo {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues20;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues20 {
  xu_yao: string;
  ti_sheng: string;
}
interface Tieji {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues19;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues19 {
  xu_yao: string;
  bai_fen_bi: string;
}
interface Shiyun {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues18;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues18 {
  xu_yao: string;
  hui_fu10: string;
  leng_que: string;
}
interface Gushou {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues17;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues17 {
  xu_yao: string;
  jian_mian: string;
  shuai_jian: string;
}
interface Cuiqiang {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues16;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues16 {
  xu_yao: string;
  shang_hai: string;
}
interface Shunxiang {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues15;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues15 {
  xu_yao: string;
  xie_liang: string;
}
interface Huogong {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues14;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues14 {
  xu_yao: string;
  chi_xu: string;
  shang_hai: string;
  zhi_liao: string;
}
interface Houqin {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues13;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues13 {
  xu_yao: string;
  fa_li: string;
  hui_fu: string;
}
interface Jinguo {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues12;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues12 {
  xu_yao: string;
  lan_liang: string;
}
interface Buqu {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues11;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues11 {
  xu_yao: string;
  chi_xu: string;
  gong_su: string;
}
interface Zhinang {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues10;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues10 {
  xu_yao: string;
}
interface Huwei {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues9;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues9 {
  xu_yao: string;
  fan_wei: string;
  hu_jia: string;
}
interface Tuxi {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues8;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues8 {
  xu_yao: string;
  gai_lv: string;
  shang_hai: string;
}
interface Jiangcai {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues7;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues7 {
  xu_yao: string;
  sheng_ming: string;
  hu_jia: string;
  gong_ji: string;
  gong_su: string;
}
interface Chimu {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues6;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues6 {
  xu_yao: string;
  yu_zhi: string;
  shang_hai: string;
}
interface Shuizhan {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues5;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues5 {
  xu_yao: string;
  chi_xu: string;
  gong_su: string;
  yi_su: string;
}
interface Yexin {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues4;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues4 {
  xu_yao: string;
  xi_xie: string;
  hu_jia: string;
  mo_kang: string;
  gong_su: string;
  gong_ji_li: string;
}
interface Dantiao {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues3;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues3 {
  xu_yao: string;
  yu_zhi: string;
}
interface Shenshe {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues2;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues2 {
  xu_yao: string;
  hu_jia: string;
  chi_xu: string;
}
interface Yingming {
  BaseClass: string;
  ScriptFile: string;
  AbilityValues: AbilityValues;
  MaxLevel: string;
  AbilityCooldown: string;
  AbilityManaCost: string;
  AbilityTextureName: string;
  AbilityBehavior: string;
}
interface AbilityValues {
  xu_yao: string;
  shang_hai1: string;
  shang_hai2: string;
  shang_hai3: string;
  jian_shang3: string;
}
interface Chesses {
  zhou_cang_1: Zhoucang1;
  zhou_cang_2: Zhoucang1;
  zhou_cang_3: Zhoucang1;
  diao_chan_1: Diaochan1;
  diao_chan_2: Diaochan1;
  diao_chan_3: Diaochan1;
  xia_hou_yuan_1: Diaochan1;
  xia_hou_yuan_2: Diaochan1;
  xia_hou_yuan_3: Diaochan1;
  zhen_ji_1: Zhenji1;
  zhen_ji_2: Zhenji1;
  zhen_ji_3: Zhenji1;
  zhang_bao_1: Zhenji1;
  zhang_bao_2: Zhenji1;
  zhang_bao_3: Zhenji1;
  xia_hou_dun_1: Xiahoudun1;
  xia_hou_dun_2: Xiahoudun1;
  xia_hou_dun_3: Xiahoudun1;
  liu_biao_1: Liubiao1;
  liu_biao_2: Liubiao1;
  liu_biao_3: Liubiao1;
  ma_chao_1: Liubiao1;
  ma_chao_2: Liubiao1;
  ma_chao_3: Liubiao1;
  zhang_liao_1: Zhangliao1;
  zhang_liao_2: Zhangliao1;
  zhang_liao_3: Zhangliao1;
  pang_tong_1: Diaochan1;
  pang_tong_2: Diaochan1;
  pang_tong_3: Diaochan1;
  dian_wei_1: Zhangliao1;
  dian_wei_2: Zhangliao1;
  dian_wei_3: Zhangliao1;
  zhang_jiao_1: Diaochan1;
  zhang_jiao_2: Diaochan1;
  zhang_jiao_3: Diaochan1;
  yuan_shu_1: Liubiao1;
  yuan_shu_2: Liubiao1;
  yuan_shu_3: Liubiao1;
  huang_gai_1: Liubiao1;
  huang_gai_2: Liubiao1;
  huang_gai_3: Liubiao1;
  hua_tuo_1: Diaochan1;
  hua_tuo_2: Diaochan1;
  hua_tuo_3: Diaochan1;
  sun_ce_1: Liubiao1;
  sun_ce_2: Liubiao1;
  sun_ce_3: Liubiao1;
  lv_bu_1: Zhangliao1;
  lv_bu_2: Zhangliao1;
  lv_bu_3: Zhangliao1;
  gan_ning_1: Ganning1;
  gan_ning_2: Ganning1;
  gan_ning_3: Ganning1;
  zhao_yun_1: Zhaoyun1;
  zhao_yun_2: Zhaoyun1;
  zhao_yun_3: Zhaoyun1;
  da_qiao_1: Daqiao1;
  da_qiao_2: Daqiao1;
  da_qiao_3: Daqiao1;
  dong_zhuo_1: Zhaoyun1;
  dong_zhuo_2: Zhaoyun1;
  dong_zhuo_3: Zhaoyun1;
  sun_jian_1: Ganning1;
  sun_jian_2: Ganning1;
  sun_jian_3: Ganning1;
  sun_shang_xiang_1: Sunshangxiang1;
  sun_shang_xiang_2: Sunshangxiang1;
  sun_shang_xiang_3: Sunshangxiang1;
  xun_yu_1: Sunshangxiang1;
  xun_yu_2: Sunshangxiang1;
  xun_yu_3: Sunshangxiang1;
  guan_yu_1: Guanyu1;
  guan_yu_2: Guanyu1;
  guan_yu_3: Guanyu1;
  xiao_qiao_1: Xiaoqiao1;
  xiao_qiao_2: Xiaoqiao1;
  xiao_qiao_3: Xiaoqiao1;
  zhang_fei_1: Zhangfei1;
  zhang_fei_2: Zhangfei1;
  zhang_fei_3: Zhangfei1;
  zhang_liang_1: Zhangliang1;
  zhang_liang_2: Zhangliang1;
  zhang_liang_3: Zhangliang1;
  huang_zhong_1: Sunshangxiang1;
  huang_zhong_2: Sunshangxiang1;
  huang_zhong_3: Sunshangxiang1;
  cao_hong_1: Caohong1;
  cao_hong_2: Caohong1;
  cao_hong_3: Caohong1;
  sun_quan_1: Ganning1;
  sun_quan_2: Ganning1;
  sun_quan_3: Ganning1;
  liu_bei_1: Zhangfei1;
  liu_bei_2: Zhangfei1;
  liu_bei_3: Zhangfei1;
  zhou_yu_1: Zhouyu1;
  zhou_yu_2: Zhouyu1;
  zhou_yu_3: Zhouyu1;
  xu_shu_1: Xiaoqiao1;
  xu_shu_2: Xiaoqiao1;
  xu_shu_3: Xiaoqiao1;
  yuan_shao_1: Yuanshao1;
  yuan_shao_2: Yuanshao1;
  yuan_shao_3: Yuanshao1;
  zhu_ge_liang_1: Sunshangxiang1;
  zhu_ge_liang_2: Sunshangxiang1;
  zhu_ge_liang_3: Sunshangxiang1;
  guo_jia_1: Sunshangxiang1;
  guo_jia_2: Sunshangxiang1;
  guo_jia_3: Sunshangxiang1;
  cao_cao_1: Caocao1;
  cao_cao_2: Caocao1;
  cao_cao_3: Caocao1;
  lu_xun_1: Sunshangxiang1;
  lu_xun_2: Sunshangxiang1;
  lu_xun_3: Sunshangxiang1;
  cao_ren_1: Zhangfei1;
  cao_ren_2: Zhangfei1;
  cao_ren_3: Zhangfei1;
  gao_shun_1: Ganning1;
  gao_shun_2: Ganning1;
  gao_shun_3: Ganning1;
  chen_gong_1: Ganning1;
  chen_gong_2: Ganning1;
  chen_gong_3: Ganning1;
  zhou_tai_1: Ganning1;
  zhou_tai_2: Ganning1;
  zhou_tai_3: Ganning1;
  tai_shi_ci_1: Taishici1;
  tai_shi_ci_2: Taishici1;
  tai_shi_ci_3: Taishici1;
  huang_yue_ying_1: Taishici1;
  huang_yue_ying_2: Taishici1;
  huang_yue_ying_3: Taishici1;
  ma_dai_1: Ganning1;
  ma_dai_2: Ganning1;
  ma_dai_3: Ganning1;
  zhang_he_1: Ganning1;
  zhang_he_2: Ganning1;
  zhang_he_3: Ganning1;
  yue_jin_1: Ganning1;
  yue_jin_2: Ganning1;
  yue_jin_3: Ganning1;
  xu_huang_1: Ganning1;
  xu_huang_2: Ganning1;
  xu_huang_3: Ganning1;
  yu_jin_1: Ganning1;
  yu_jin_2: Ganning1;
  yu_jin_3: Ganning1;
  yan_liang_1: Yanliang1;
  yan_liang_2: Yanliang1;
  yan_liang_3: Yanliang1;
  wen_chou_1: Yanliang1;
  wen_chou_2: Yanliang1;
  wen_chou_3: Yanliang1;
  cai_wen_ji_1: Taishici1;
  cai_wen_ji_2: Taishici1;
  cai_wen_ji_3: Taishici1;
  liu_xie_1: Yanliang1;
  liu_xie_2: Yanliang1;
  liu_xie_3: Yanliang1;
  lv_meng_1: Ganning1;
  lv_meng_2: Ganning1;
  lv_meng_3: Ganning1;
  lu_su_1: Taishici1;
  lu_su_2: Taishici1;
  lu_su_3: Taishici1;
  fa_zheng_1: Taishici1;
  fa_zheng_2: Taishici1;
  fa_zheng_3: Taishici1;
  wei_yan_1: Yanliang1;
  wei_yan_2: Yanliang1;
  wei_yan_3: Yanliang1;
  liu_shan_1: Ganning1;
  liu_shan_2: Ganning1;
  liu_shan_3: Ganning1;
  si_ma_yi_1: Taishici1;
  si_ma_yi_2: Taishici1;
  si_ma_yi_3: Taishici1;
  zhang_chun_hua_1: Yanliang1;
  zhang_chun_hua_2: Yanliang1;
  zhang_chun_hua_3: Yanliang1;
  meng_huo_1: Yanliang1;
  meng_huo_2: Yanliang1;
  meng_huo_3: Yanliang1;
  zhu_rong_1: Daqiao1;
  zhu_rong_2: Daqiao1;
  zhu_rong_3: Daqiao1;
  xun_you_1: Daqiao1;
  xun_you_2: Daqiao1;
  xun_you_3: Daqiao1;
  cao_pi_1: Taishici1;
  cao_pi_2: Taishici1;
  cao_pi_3: Taishici1;
  cao_zhi_1: Daqiao1;
  cao_zhi_2: Daqiao1;
  cao_zhi_3: Daqiao1;
  'gao_peng-ce_shi_xin_zeng': Gaopengceshixinzeng;
  zuo_ci_1: Diaochan1;
  zuo_ci_2: Diaochan1;
  zuo_ci_3: Diaochan1;
  jia_xu_1: Diaochan1;
  jia_xu_2: Diaochan1;
  jia_xu_3: Diaochan1;
  pang_de_1: Ganning1;
  pang_de_2: Ganning1;
  pang_de_3: Ganning1;
  han_dang_1: Taishici1;
  han_dang_2: Taishici1;
  han_dang_3: Taishici1;
  jiang_wei_1: Zhaoyun1;
  jiang_wei_2: Zhaoyun1;
  jiang_wei_3: Zhaoyun1;
  xu_chu_1: Zhangliao1;
  xu_chu_2: Zhangliao1;
  xu_chu_3: Zhangliao1;
}
interface Gaopengceshixinzeng {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
}
interface Yanliang1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  vscripts: string;
  HasInventory: string;
}
interface Taishici1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Caocao1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  vscripts: string;
  HasInventory: string;
}
interface Yuanshao1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  vscripts: string;
  HasInventory: string;
}
interface Zhouyu1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Caohong1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Zhangliang1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Zhangfei1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  vscripts: string;
  HasInventory: string;
}
interface Xiaoqiao1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Guanyu1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Sunshangxiang1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  StatusHealth: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Daqiao1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Zhaoyun1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Ganning1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementTurnRate: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  vscripts: string;
  HasInventory: string;
}
interface Zhangliao1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Liubiao1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  vscripts: string;
  HasInventory: string;
}
interface Xiahoudun1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  vscripts: string;
  HasInventory: string;
}
interface Zhenji1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Diaochan1 {
  Searchable: string;
  Cost: string;
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  Zhenying: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileModel: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}
interface Zhoucang1 {
  Ability1: string;
  Ability2: string;
  Ability3: string;
  Ability4: string;
  Ability5: string;
  Ability6: string;
  Ability7: string;
  Ability23: string;
  BaseClass: string;
  Model: string;
  ModelScale: string;
  SoundSet: string;
  particle_folder: string;
  GameSoundsFile: string;
  VoiceFile: string;
  ConsideredHero: string;
  HealthBarOffset: string;
  MovementSpeed: string;
  MovementCapabilities: string;
  AttackCapabilities: string;
  ArmorPhysical: string;
  MagicalResistance: string;
  StatusHealth: string;
  StatusHealthRegen: string;
  StatusMana: string;
  StatusManaRegen: string;
  AttackDamageMin: string;
  AttackDamageMax: string;
  AttackRate: string;
  AttackAnimationPoint: string;
  AttackRange: string;
  BoundsHullName: string;
  RingRadius: string;
  ProjectileSpeed: string;
  vscripts: string;
  HasInventory: string;
}