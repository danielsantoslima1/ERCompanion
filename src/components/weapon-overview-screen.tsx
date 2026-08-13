import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText as Text } from './app-text';
import { AppTextInput } from './app-text-input';
import { CategoryPageTitle } from './category-page-title';
import { RegionProgressItem } from './region-progress-item';
import { WeaponCard } from './weapon-card';
import { WeaponCategoryProgressCard } from './weapon-category-progress-card';
import { searchWeapons, weaponProgress, weapons, weaponTypeCounts, getWeaponType, getWeaponsByType, type Weapon, type WeaponTypeCount } from '../data';
import { useApp } from '../hooks/use-app';

export function WeaponOverviewScreen() {
  const app = useApp(); const [query,setQuery]=useState(''); const ids=useMemo(()=>app.collectedWeaponIds??[],[app.collectedWeaponIds]);
  const collected=useMemo(()=>new Set(ids),[ids]); const results=useMemo(()=>query.trim()?searchWeapons(weapons,query):[],[query]);
  const progress=weaponProgress(weapons,ids); const data: readonly (Weapon|WeaponTypeCount)[]=query.trim()?results:weaponTypeCounts;
  return <><Drawer.Screen options={{title:'Weapons'}}/><SafeAreaView style={[styles.screen,{backgroundColor:app.theme.colors.background}]}><FlatList<Weapon|WeaponTypeCount>
    data={data} keyExtractor={item=>item.id} initialNumToRender={12} windowSize={7}
    contentContainerStyle={[styles.content,{gap:app.theme.spacing.medium,padding:app.theme.spacing.large}]}
    ListHeaderComponent={<View style={{gap:app.theme.spacing.medium}}><CategoryPageTitle>Weapons</CategoryPageTitle><RegionProgressItem defeated={progress.completed} total={progress.total} percentage={progress.percentage}/><AppTextInput accessibilityLabel="Search Weapons" value={query} onChangeText={setQuery} placeholder="Search Weapons" style={[styles.input,{borderColor:app.theme.colors.inputBorder,color:app.theme.colors.textPrimary}]}/>{!query.trim()?<><View style={styles.shortcuts}>{[['All Weapons','/weapons/all'],['Base Game','/weapons/base-game'],['Shadow of the Erdtree','/weapons/shadow-of-the-erdtree']].map(([label,path])=><Pressable key={path} accessibilityRole="button" onPress={()=>router.push(path as never)} style={[styles.shortcut,{borderColor:app.theme.colors.primary,borderRadius:app.theme.borderRadius.medium}]}><Text style={{color:app.theme.colors.primary,fontWeight:'700'}}>{label}</Text></Pressable>)}</View><Text style={[styles.section,{color:app.theme.colors.textPrimary}]}>Browse by Weapon Type</Text></>:<Text style={{color:app.theme.colors.textSecondary}}>{results.length} results</Text>}</View>}
    renderItem={({item})=>'weaponTypeId' in item?<WeaponCard name={item.name} type={getWeaponType(item.weaponTypeId)?.name??''} location={item.primaryLocation} collected={collected.has(item.id)} onDetails={()=>router.push({pathname:'/weapons/[weaponId]',params:{weaponId:item.id}})} onToggle={()=>app.toggleWeaponCollected?.(item.id)}/>:<WeaponCategoryProgressCard name={item.name} total={item.total} completed={weaponProgress(getWeaponsByType(item.id),ids).completed} onPress={()=>router.push({pathname:'/weapons/category/[categoryId]',params:{categoryId:item.id}})}/>}/></SafeAreaView></>;
}
const styles=StyleSheet.create({screen:{flex:1},content:{paddingBottom:48},input:{borderWidth:1,minHeight:48,paddingHorizontal:12},shortcuts:{flexDirection:'row',flexWrap:'wrap',gap:8},shortcut:{borderWidth:1,minHeight:44,justifyContent:'center',paddingHorizontal:12},section:{fontSize:20,fontWeight:'700'}});
