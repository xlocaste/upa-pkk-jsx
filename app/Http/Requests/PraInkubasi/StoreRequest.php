<?php

namespace App\Http\Requests\PraInkubasi;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama_ketua_tim' => ['required', 'string', 'max:255'],
            'status_mahasiswa_alumni' => ['nullable', 'string', 'max:50'],
            'judul_proposal' => ['required', 'string', 'max:255'],
            'dosen_pembimbing' => ['nullable', 'string', 'max:255'],
            'usulan_anggaran' => ['nullable', 'string', 'max:100'],
            'no_wa' => ['required', 'string', 'max:20'],
            'keterangan' => ['nullable', 'string', 'max:500'],
        ];
    }

    public function messages(): array
    {
        return [
            'nama_ketua_tim.required' => 'Nama ketua tim wajib diisi.',
            'nama_ketua_tim.string' => 'Nama ketua tim harus berupa teks.',
            'nama_ketua_tim.max' => 'Nama ketua tim maksimal 255 karakter.',

            'status_mahasiswa_alumni.string' => 'Status harus berupa teks.',
            'status_mahasiswa_alumni.max' => 'Status maksimal 50 karakter.',

            'judul_proposal.required' => 'Judul proposal wajib diisi.',
            'judul_proposal.string' => 'Judul proposal harus berupa teks.',
            'judul_proposal.max' => 'Judul proposal maksimal 255 karakter.',

            'dosen_pembimbing.string' => 'Dosen pembimbing harus berupa teks.',
            'dosen_pembimbing.max' => 'Dosen pembimbing maksimal 255 karakter.',

            'usulan_anggaran.string' => 'Usulan anggaran harus berupa teks.',
            'usulan_anggaran.max' => 'Usulan anggaran maksimal 100 karakter.',

            'no_wa.required' => 'Nomor WhatsApp wajib diisi.',
            'no_wa.string' => 'Nomor WhatsApp harus berupa teks.',
            'no_wa.max' => 'Nomor WhatsApp maksimal 20 karakter.',

            'keterangan.string' => 'Keterangan harus berupa teks.',
            'keterangan.max' => 'Keterangan maksimal 500 karakter.',
        ];
    }

}
