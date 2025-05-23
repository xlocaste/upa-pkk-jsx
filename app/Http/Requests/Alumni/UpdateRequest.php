<?php

namespace App\Http\Requests\Alumni;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'tempat_magang' => ['required'],
            'judul_magang' => ['required'],
            'judul_tugas_akhir' => ['required'],
            'tahun_lulus' => ['required'],
        ];
    }

    public function messages(): array
    {
        return [
            'mahasiswa_id.required' => 'Mahasiswa wajib dipilih.',
            'tempat_magang.required'    => 'Tempat magang wajib diisi.',
            'judul_magang.required'     => 'Judul magang wajib diisi.',
            'judul_tugas_akhir.required' => 'Judul tugas akhir wajib diisi.',
            'tahun_lulus.required'      => 'Tahun lulus wajib diisi.',
        ];
    }
}
