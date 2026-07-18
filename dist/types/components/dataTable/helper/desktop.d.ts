import type { ColDef, ColGroupDef } from "ag-grid-community";
import type { CBTableColumn } from "../../../datatable";
/**
 * Converte uma CBTableColumn (nossa API simplificada) em um ColDef/ColGroupDef
 * do AG Grid.
 *
 * Ponto importante: fazemos spread das propriedades "cruas" do ColDef
 * (sortable, filter, editable, pinned, valueGetter, etc.) que vierem em
 * `col`, e SÓ DEPOIS sobrescrevemos o que o CBDataTable precisa controlar
 * (flex, cellRenderer, cellClass). Isso evita que propriedades nativas do
 * AG Grid que o consumidor tenha setado sejam silenciosamente descartadas
 * (o problema que existia na versão anterior, que reconstruía o objeto do
 * zero escolhendo campo por campo).
 */
export declare function mapColumn<T>(col: CBTableColumn<T>): ColDef<T> | ColGroupDef<T>;
